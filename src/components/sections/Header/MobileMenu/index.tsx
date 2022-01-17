import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';

import disc from '../../../../assets/img/sections/landing/header/disc.png';
import ig from '../../../../assets/img/sections/landing/header/ig.png';
import tele from '../../../../assets/img/sections/landing/header/tele.png';
import twit from '../../../../assets/img/sections/landing/header/twit.png';
import { useWeb3Context } from '../../../../context/WalletConnect';
import guide01 from '../../../../assets/img/sections/landing/body/guide_01.jpg';
import guide02 from '../../../../assets/img/sections/landing/body/guide_02.jpg';
import guide03 from '../../../../assets/img/sections/landing/body/guide_03.jpg';
import Button from '../../../atoms/Button';

import s from './styles.module.scss';

type Props = {
  className?: string;
  connectWallet: () => void;
  toggleMenu: () => void;
};

const MobileMenu: FC<Props> = ({ className, connectWallet, toggleMenu }) => {
  const { user } = useWeb3Context();
  const { t } = useTranslation();

  const handleScroll = (link: string) => {
    toggleMenu();
    const element = document.getElementById(link);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={cx(s.container, className)}>
      <div className={s.nav}>
        <div
          onClick={() => handleScroll('project')}
          tabIndex={0}
          onKeyDown={() => {}}
          role="button"
          className={s.link}
        >
          {t('navigation.project')}
        </div>
        <div
          onClick={() => handleScroll('team')}
          tabIndex={0}
          onKeyDown={() => {}}
          role="button"
          className={s.link}
        >
          {t('navigation.team')}
        </div>
        <div
          onClick={() => handleScroll('roadmap')}
          tabIndex={0}
          onKeyDown={() => {}}
          role="button"
          className={s.link}
        >
          {t('navigation.roadmap')}
        </div>
        <div
          onClick={() => handleScroll('Faq')}
          tabIndex={0}
          onKeyDown={() => {}}
          role="button"
          className={s.link}
        >
          {t('navigation.faq')}
        </div>
      </div>
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
          <img src={ig} alt="disc" className={s.logoSoc} />
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
      <a href="#popup2" className={s.link}>{t('guide.title')}</a>
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
      <div className={s.footer}>
        <Button
          title={
            user.address
              ? `${user.address.slice(0, 7)}...${user.address.slice(-1)}`
              : t('button.connect')
          }
          className={s.button}
          onClick={connectWallet}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
