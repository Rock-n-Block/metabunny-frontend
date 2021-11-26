import { ConnectWallet } from '@amfi/connect-wallet';
import { metabunnyAbi } from '../../config/abi';
import Web3 from 'web3';

import { connectWalletConfig } from '../../config/index';
import { clogData } from '../../utils/logger';
import { notify } from '../../utils/notify';
import BigNumber from 'bignumber.js';

export class WalletConnect {
  private connectWallet: any;

  constructor() {
    this.connectWallet = new ConnectWallet();
  }

  public async initWalletConnect(name: string): Promise<boolean> {
    const { provider, network, settings } = connectWalletConfig;
    const connecting = this.connectWallet
      .connect(provider[name], network, settings)
      .then((connected: boolean) => {
        if (connected) {
          return this.getAccounts();
        }
        return connected;
      })
      .catch((err: any) => {
        clogData('CONNECT ERR', err);
      });

    return Promise.all([connecting]).then((connect: any) => {
      return connect[0];
    });
  }

  private async checkEthNetwork() {
    const { connector, providerName } = this.connectWallet;

    if (providerName === 'MetaMask') {
      try {
        const resChain = await connector.connector.request({
          method: 'eth_chainId',
        });
        if (connectWalletConfig.network.chainID !== parseInt(resChain, 16)) {
          connector.connector.request({
            method: 'wallet_switchEthereumChain',
            params: [
              {
                chainId: `0x${connectWalletConfig.network.chainID.toString(16)}`,
              },
            ],
          });
          return true;
        }
        return true;
      } catch (error) {
        clogData('checkNewErr', error);
        return false;
      }
    }

    if (providerName === 'WalletConnect') {
      const resChain = await connector.connector.request({
        method: 'eth_chainId',
      });
      if (connectWalletConfig.network.chainID !== parseInt(resChain, 16)) {
        localStorage.removeItem('walletconnect');
        return false;
      }
      return true;
    }

    return true;
  }

  public async getAccounts() {
    return new Promise((resolve) => {
      this.checkEthNetwork().then((connection) => {
        if (connection) {
          this.connectWallet.getAccounts().subscribe(
            (user: any) => {
              resolve(user);
            },
            (err: any) => {
              resolve(err);
            },
          );
        } else
          resolve({
            code: 404,
            message: {
              text: `Wrong network, please choose ${connectWalletConfig.network.chainName}`,
            },
          });
      });
    });
  }

  public logOut(): void {
    this.connectWallet.resetConect();
  }

  public currentWeb3(): Web3 {
    return this.connectWallet.currentWeb3();
  }

  public async sendTx(data: { from: string; to: string; value: string }) {
    const currentWeb3 = this.currentWeb3();
    const res = await currentWeb3.eth.sendTransaction(data);
    return res;
  }

  public async getContract(address: string, abi: any) {
    const contract = await this.connectWallet.getContract({
      address,
      abi,
    });

    return contract;
  }

  async mint(amount: number, userAddress: string) {
    console.log('amount', amount)
    const contract = await this.getContract(
      '0x88D5a12EAf4AB5441A3D54b87F7745c64548A330',
      metabunnyAbi,
    );
    const isPaused = await contract.methods.paused().call();
    if (isPaused) {
      notify('Minting is paused now', 'error');
      return;
    }
    const totalSupply = await contract.methods.totalSupply().call();
    const allowance = await contract.methods.allowedToExist().call();
    if (new BigNumber(totalSupply).plus(amount).isGreaterThan(new BigNumber(allowance))) {
      notify('There is no tokens to mint', 'error');
      return;
    }
    const price = await contract.methods.price().call();
    const result = await contract.methods.buy(amount).send({
      from: userAddress,
      value: new BigNumber(amount.toString()).times(new BigNumber(price)).toFixed(),
    });
    console.log('result', result)
    if (result?.events?.Transfer?.returnValues?.tokenId) {
      notify('View on opensea', 'link', result.events.Transfer.returnValues.tokenId)
    } else {
      notify('Something went wrong', 'error')
    }
  }
}
