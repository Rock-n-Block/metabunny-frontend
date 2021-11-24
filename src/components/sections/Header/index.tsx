import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import banner from '../../../assets/img/sections/landing/header/banner.png';
import disc from '../../../assets/img/sections/landing/header/disc.png';
import logo from '../../../assets/img/sections/landing/header/logo.png';
import twit from '../../../assets/img/sections/landing/header/twit.png';
import { is_production } from '../../../config/index';
import { useModals } from '../../../context/Modal';
import { useWeb3Context } from '../../../context/WalletConnect';
import { notify } from '../../../utils/notify';
import Burger from '../../atoms/Burger';
import Button from '../../atoms/Button';
import WalletModal from '../../molecules/Modals/WalletModal';

import MobileMenu from './MobileMenu';

import s from './Header.module.scss';

function timeToDate(date: string) {
  let secondsToDate = Math.round((+new Date(date) - +new Date(Date.now())) / 1000);

  if (secondsToDate < 0) return { days: 0, hours: 0, mins: 0, sec: 0 };

  const days = Math.floor(secondsToDate / 3600 / 24);
  secondsToDate -= days * 24 * 3600;

  const hours = Math.floor(secondsToDate / 3600);
  secondsToDate -= hours * 3600;

  const mins = Math.floor((secondsToDate / 3600) * 60);
  secondsToDate -= mins * 60;

  const sec = secondsToDate;

  return { days, hours, mins, sec };
}

const PRESALE_DATE_END = '2021-09-19T21:00:00';
// const TIME_FOR_UPDATE = 20000;
const Header: React.FC = () => {
  const { init, user } = useWeb3Context();
  const { setModal } = useModals();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen]);

  const [timeBeforeEnd, setTimeBeforeEnd] = useState(timeToDate(PRESALE_DATE_END));
  // const [lastTimerId, setLastTimerId] = useState<Array<NodeJS.Timeout>>([]);
  // const [modalsData, setModalsData] = useState<Array<IMintModalProps>>([]);

  // const getInfoAboutTx = useCallback(
  //   async (txHash: string) => {
  //     const headers = await fetch(`${backendUrl}payments/${txHash}/`);
  //     const data = await headers.json();

  //     if (data.status === 'SUCCESS') {
  //       const hashesFromLs = localStorage.getItem('txHashes');
  //       const hashes = hashesFromLs ? await JSON.parse(hashesFromLs) : [];

  //       // if (hashes.includes(txHash)) {
  //       //   setModalsData((prevState) => [
  //       //     ...prevState.filter((modal) => modal.txHash !== txHash),
  //       //     {
  //       //       type: data.rarity === 'common' ? 'COMMON' : 'LEGENDARY',
  //       //       img: data.image,
  //       //       txHash,
  //       //       id: data.id,
  //       //     },
  //       //   ]);

  //       //   setModal(txHash);
  //       // }
  //     }
  //   },
  //   [setModal],
  // );
  const mintNft = async (wallet: 'MetaMask' | 'WalletConnect') => {
    if (!Object.values(timeBeforeEnd).every((el) => el === 0) && is_production) {
      notify("The presale hasn't started yet", 'error');
      return;
    }
    const info = await init(wallet);

    if (!info) {
      notify('No Web3 Provider! Please install or download MetaMask', 'error');
      return;
    }

    if (info.code === 3) {
      notify(`${info.message.message} Connect your wallet!`, 'error');
      return;
    }

    if ([404, 4].includes(info.code)) {
      notify(info.message.text, 'error');
      // return;
    }

    // if (info && !info.code) {
    //   try {
    //     const backendData = await fetch(`${backendUrl}info/?format=json`);
    //     const data = await backendData.json();

    //     if (data.minted >= data.total_mint_amount) {
    //       notify('All nfts are minted!', 'error');
    //     } else if (data.address) {
    //       notify('Please wait for your transaction to be approved!');

    //       const txRes = await sendEth({
    //         from: info.address,
    //         to: data.address,
    //         value: data.amount,
    //       });

    //       if (txRes.status) {
    //         const hashesFromLS = localStorage.getItem('txHashes');
    //         const hashes = hashesFromLS ? JSON.parse(hashesFromLS) : [];
    //         hashes.push(txRes.transactionHash);

    //         localStorage.setItem('txHashes', JSON.stringify(hashes));

    //         notify('The transaction has been sent!', 'success');
    //         notify(
    //           'Please stay on the site, your token will be generated within a couple of minutes!',
    //           'success',
    //         );

    //         // const timerId = setInterval(() => {
    //         //   hashes.forEach((txHash: string) => {
    //         //     getInfoAboutTx(txHash);
    //         //   });
    //         // }, TIME_FOR_UPDATE);

    //         // // current timer id
    //         // setLastTimerId((prev) => [...prev, timerId]);
    //       }
    //     }
    //   } catch (error: any) {
    //     notify(error.message, 'error');
    //   }
    // }
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      const time = timeToDate(PRESALE_DATE_END);
      setTimeBeforeEnd(time);
      if (Object.values(time).every((el) => el === 0)) {
        clearInterval(timerId);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <header className={s.header}>
        <div className={s.header_inner}>
          <div className={s.logo}>
            <Burger className={s.burger} onClick={toggleMenu} isMenuOpen={isMenuOpen} />
            <img src={logo} alt="logo" className={s.logoImg} />
            <div className={s.nav}>
              <a href="#project" className={s.link}>
                Project
              </a>
              <a href="#roadmap" className={s.link}>
                Roadmap
              </a>
              <a href="#team" className={s.link}>
                Team
              </a>
              <a href="#faq" className={s.link}>
                Faq
              </a>
            </div>
          </div>

          <div className={s.right}>
            <div className={s.socials}>
              <a href="/" className={s.socialLink}>
                <img src={disc} alt="disc" className={s.logoSoc} />
              </a>
              <a href="/" className={s.socialLink}>
                <img src={twit} alt="twit" className={s.logoSoc} />
              </a>
            </div>
            <Button
              title={
                user.address
                  ? `${user.address.slice(0, 7)}...${user.address.slice(-1)}`
                  : 'Connect wallet'
              }
              className={s.button}
              onClick={() => setModal('wallet')}
            />
          </div>
        </div>

        <WalletModal mintNft={mintNft} />
        {isMenuOpen && (
          <MobileMenu
            toggleMenu={toggleMenu}
            connectWallet={() => setModal('wallet')}
            className={cn(s.mobileMenu, { [s.mobileMenuOpen]: isMenuOpen })}
          />
        )}
      </header>
      <div className={s.bannerWrapper}>
        <img src={banner} alt="banner" className={s.banner} />
        <Button
          title="Mint"
          className={s.bannerButton}
          onClick={() => setModal(user.address ? 'txHash' : 'wallet')}
        />
        <div className={s.foot}> </div>
      </div>
    </>
  );
};

export default Header;
