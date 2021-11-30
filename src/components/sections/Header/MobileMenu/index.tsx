import { FC } from 'react';
import cx from 'classnames';

import Button from '../../../atoms/Button';
import { useWeb3Context } from '../../../../context/WalletConnect';

import s from './styles.module.scss';

type Props = {
  className?: string;
  connectWallet: () => void;
  toggleMenu: () => void;
};

const MobileMenu: FC<Props> = ({ className, connectWallet, toggleMenu }) => {  
  const {user} = useWeb3Context()

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
          Project
        </div>
        <div
          onClick={() => handleScroll('team')}
          tabIndex={0}
          onKeyDown={() => {}}
          role="button"
          className={s.link}
        >
          Team
        </div>
        <div
          onClick={() => handleScroll('roadmap')}
          tabIndex={0}
          onKeyDown={() => {}}
          role="button"
          className={s.link}
        >
          Roadmap
        </div>
        <div
          onClick={() => handleScroll('Faq')}
          tabIndex={0}
          onKeyDown={() => {}}
          role="button"
          className={s.link}
        >
          Faq
        </div>
      </div>
      <div className={s.footer}>
        <Button
          title={
            user.address
              ? `${user.address.slice(0, 7)}...${user.address.slice(-1)}`
              : 'Connect wallet'
          }
          className={s.button}
          onClick={connectWallet}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
