import { createContext, useContext, useState } from "react";
import { notify } from "../utils/notify";

import { WalletConnect } from "../services/connect-wallet/index";

interface ITxData {
  from: string;
  to: string;
  value: string;
}

export interface IUser {
  address: string | null;
  code?: number;
  message?: {
    message: string;
  };
  provider: string | null
}

const wcService = new WalletConnect();

interface IContext {
  init: (wallet: "MetaMask" | "WalletConnect") => any;
  disconnect: () => any;
  sendEth: (data: ITxData) => any;
  user: IUser;
}

const Web3Context = createContext({} as IContext);

const WalletConnectProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({ address: null, provider: null });
  const init = async (wallet: "MetaMask" | "WalletConnect") => {
    const account: any = await wcService.initWalletConnect(wallet);
    if (account.address) {
      notify(
        `Wallet connected: ${account.address.slice(
          0,
          5
        )}...${account.address.slice(-5)}`,
        "success"
      );
    }
    setUser({ address: account.address, provider: wallet });
    localStorage.setItem('metabunny_address', account.address)
    return account;
  };

  const sendEth = async (data: ITxData) => {
    const res = await wcService.sendTx(data);
    return res;
  };

  const disconnect = async () => {
    setUser({ address: '', provider: '' })
  }

  return (
    <Web3Context.Provider
      value={{ init, disconnect, sendEth: (data: ITxData) => sendEth(data), user }}
    >
      {children}
    </Web3Context.Provider>
  );
};

const useWeb3Context = () => {
  return useContext(Web3Context);
};

export { WalletConnectProvider, useWeb3Context };
