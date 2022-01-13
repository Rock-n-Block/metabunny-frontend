import { useTranslation } from 'react-i18next';
import bg from '../../../assets/img/sections/landing/body/bg_upside.png';
import disc from '../../../assets/img/sections/landing/header/disc.png';
import tele from '../../../assets/img/sections/landing/header/tele.png';
import logo from '../../../assets/img/sections/landing/header/logo.png';
import twit from '../../../assets/img/sections/landing/header/twit.png';
import hkd from '../../../assets/img/sections/landing/body/hkd.png';
import eth from '../../../assets/img/sections/landing/body/eth.png';

import s from './Footer.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className={s.footer}>
      <div className={s.container}>
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
          <a href="#faq" className={s.link}>
            {t('navigation.faq')}
          </a>
        </div>

        <div className={s.socials}>
        <a
            href="https://t.me/hkd_com"
            className={s.socialLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={tele} alt="tele" className={s.logoSoc} />
          </a>
          <a
            href="https://www.instagram.com/metabunny.nft/"
            className={s.socialLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={disc} alt="disc" className={s.logoSoc} />
          </a>
          <a
            href="https://twitter.com/metabunnynft"
            rel="noopener noreferrer"
            target="_blank"
            className={s.socialLink}
          >
            <img src={twit} alt="twit" className={s.logoSoc} />
          </a>
        </div>
        <span>{t('footer.remark')}</span>
        <br />
        <div className={s.cp}>
        <div className={s.powered}>
          <div className={s.desc}>Powered by</div>
            <img src={hkd} alt='' className={s.hkd} />
            <img src={eth} alt='' className={s.eth} />
          </div>
        </div>
      </div>
      <img src={bg} alt="bg" className={s.bgImg} />
     
    </footer>
  );
};

export default Footer;
