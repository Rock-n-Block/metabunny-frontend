import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import nextId from 'react-id-generator';
import OutsideClickHandler from 'react-outside-click-handler';
import ReactPlayer from 'react-player';
import cn from 'classnames';
import moment from 'moment';

import { ReactComponent as IconArrow } from '../../../assets/img/icons/arrowBottom.svg';
import banner from '../../../assets/img/sections/landing/header/banner.png';
import disc from '../../../assets/img/sections/landing/header/disc.png';
import ig from '../../../assets/img/sections/landing/header/ig.png';
import logo from '../../../assets/img/sections/landing/header/logo.png';
import overview from '../../../assets/img/sections/landing/header/overview.png';
import tele from '../../../assets/img/sections/landing/header/tele.png';
import twit from '../../../assets/img/sections/landing/header/twit.png';
import { is_production } from '../../../config/index';
import { useModals } from '../../../context/Modal';
import { useWeb3Context } from '../../../context/WalletConnect';
import { notify } from '../../../utils/notify';
import Burger from '../../atoms/Burger';
import Button from '../../atoms/Button';
import WalletModal from '../../molecules/Modals/WalletModal';

import guide01 from '../../../assets/img/sections/landing/body/guide_01.jpg';
import guide02 from '../../../assets/img/sections/landing/body/guide_02.jpg';
import guide03 from '../../../assets/img/sections/landing/body/guide_03.jpg';

import MobileMenu from './MobileMenu';

import s from './Header.module.scss';

const languages = ['English', 'Русский', '中文'];

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
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen]);
  const [language, setLanguage] = useState(
    localStorage.metabunny_lang && localStorage.metabunny_lang === 'ru'
      ? languages[1]
      : languages[0],
  );

  const [timeBeforeEnd, setTimeBeforeEnd] = useState(timeToDate(PRESALE_DATE_END));

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

  const handleChangeLang = (lang: string) => {
    setLanguage(lang);
    if (lang === 'English') {
      i18n.changeLanguage('en');
      localStorage.metabunny_lang = 'en';
      moment.locale('en');
    } else if (lang === '中文') {
      i18n.changeLanguage('chi');
      localStorage.metabunny_lang = 'chi';
      moment.locale('chi');
    } else {
      i18n.changeLanguage('ru');
      localStorage.metabunny_lang = 'ru';
      moment.locale('ru');
    }
  };

  const Translate: React.FC<any> = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <OutsideClickHandler onOutsideClick={() => setIsVisible(false)}>
        <div className={cn({ [s.active]: isVisible }, s.translate)} id="translate">
          <div
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
            className={cn(s.head)}
            onClick={() => setIsVisible(!isVisible)}
          >
            <div className={cn(s.selection)}>{language}</div>
            <div className={cn(s.arrow)}>
              <IconArrow className={s.arrowIcon} />
            </div>
          </div>
          <div className={cn(s.body)}>
            {languages.map((x: any) => (
              <div
                onKeyDown={() => {}}
                tabIndex={0}
                role="button"
                className={cn(s.option, {
                  [s.selectioned]: x === language,
                })}
                onClick={() => handleChangeLang(x)}
                key={nextId()}
              >
                <span className={s.text}>{x}</span>
              </div>
            ))}
          </div>
        </div>
      </OutsideClickHandler>
    );
  };

  useEffect(() => {
    if (localStorage.metabunny_lang) {
      i18n.changeLanguage(localStorage.metabunny_lang);
      moment.locale(localStorage.metabunny_lang);
    }
  }, [i18n]);

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

  useEffect(() => {
    if (localStorage.metabunny_provider) {
      init(localStorage.metabunny_provider);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                {t('navigation.project')}
              </a>
              <a href="#roadmap" className={s.link}>
                {t('navigation.roadmap')}
              </a>
              <a href="#team" className={s.link}>
                {t('navigation.team')}
              </a>
              <div className={s.menuwrap}>
                  <ul className={s.menu}>
                      <li className={s.menuitem}>
                          <a href="#faq" className={s.link}>{t('navigation.faq')}</a>
                          <ul className={s.dropmenu}>
                              <li className={s.dropmenuitem}>
                                  <a href="#popup2">{t('guide.title')}</a>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </div>
            </div>
          </div>

          <div className={s.right}>
            <div className={s.socials}>
              <a
                href="https://discord.com/invite/UA8Z3fRR"
                className={s.socialLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={disc} alt="disc" className={s.logoSoc} />
              </a>
              <a
                href="https://www.instagram.com/metabunny.nft/"
                className={s.socialLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={ig} alt="ig" className={s.logoSoc} />
              </a>

              <a
                href="https://twitter.com/metabunnynft"
                rel="noopener noreferrer"
                target="_blank"
                className={s.socialLink}
              >
                <img src={twit} alt="twit" className={s.logoSoc} />
              </a>
              <a
                href="https://t.me/hkd_com"
                className={s.socialLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={tele} alt="tele" className={s.logoSoc} />
              </a>
            </div>
            <Translate />
            <Button
              title={
                user.address
                  ? `${user.address.slice(0, 7)}...${user.address.slice(-1)}`
                  : t('button.connect')
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
        <ReactPlayer
          className={s.video}
          width="100%"
          url={[
            { src: 'https://oninwar.com/raw/bunny.mp4', type: 'video/mp4' },
            { src: 'https://oninwar.com/raw/bunny.webm', type: 'video/webm' },
          ]}
          playsinline
          playing
          loop
          muted
          config={{
            file: {
              attributes: {
                preload: 'auto',
              },
            },
          }}
        />

        <img src={banner} alt="banner" className={s.banner} />
        <img src={overview} alt="overview" className={s.overview} />
        <div className={s.bcontent}>
        
          <Button
            title={t('button.mint')}
            className={s.bannerButton}
            onClick={() => setModal(user.address ? 'txHash' : 'wallet')}
          />
          <a href="litepaper.pdf" target="_blank" rel="noreferrer">
            <Button title={t('navigation.litepaper')} className={s.bannerButton2} />
          </a>
        </div>
        <div className={s.foot}> </div>
      </div>
      <div id="popup2" className={s.popupcontainer}>
        <div className={s.popupcontent}>
          <a href="#banner" className={s.close}>&times;</a>
          <h2>{t('guide.title')}</h2>
          <h3>{t('guide.step1')}</h3>
            <br />
            <br />
            {t('guide.step1texta')} <a href="https://www.metabunny.io" target="_blank" rel="noreferrer">https://www.metabunny.io</a>
            <br />{t('guide.step1textb')} <a href="https://youtu.be/G9jwLbmGziw" target="_blank" rel="noreferrer">https://youtu.be/G9jwLbmGziw</a>)
            <img src={guide01} alt=""/>
            {t('guide.step1textc')}
          <h2>{t('guide.step2')}</h2>
          <h3>{t('guide.step2texta')}</h3>
          <img src={guide02} alt=""/>
          <h2>{t('guide.step3')}</h2>
          <h3>{t('guide.step3texta')}</h3>
          <img src={guide03} alt=""/> 
          <h3>{t('guide.step4')}</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
