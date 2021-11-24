import bg from '../../../assets/img/sections/landing/body/bg_upside.png';
import disc from '../../../assets/img/sections/landing/header/disc.png';
import logo from '../../../assets/img/sections/landing/header/logo.png';
import twit from '../../../assets/img/sections/landing/header/twit.png';
import Button from '../../atoms/Button';

import s from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <img src={logo} alt="logo" className={s.logoImg} />
        <Button title="Join Discord" className={s.button} image={disc} />
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
        <div className={s.socials}>
          <a href="/" className={s.socialLink}>
            <img src={disc} alt="disc" className={s.logoSoc} />
          </a>
          <a href="/" className={s.socialLink}>
            <img src={twit} alt="twit" className={s.logoSoc} />
          </a>
        </div>
      </div>

      <img src={bg} alt="bg" className={s.bgImg} />
    </footer>
  );
};

export default Footer;
