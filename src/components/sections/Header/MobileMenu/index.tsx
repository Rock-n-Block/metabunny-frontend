import { FC } from 'react';
import cx from 'classnames';

import Button from '../../../atoms/Button';

import s from './styles.module.scss';

type Props = {
  className?: string;
  connectWallet: () => void
};

const MobileMenu: FC<Props> = ({ className, connectWallet }) => {
  return (
    <div className={cx(s.container, className)}>
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
      <div className={s.footer}>
        <Button title="Connect Wallet" className={s.button} onClick={connectWallet} />
      </div>
    </div>
  );
};

export default MobileMenu;
