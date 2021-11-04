import Button from '../../../atoms/Button';
import s from './FirstBlock.module.scss';
import banner from '../../../../assets/img/sections/landing/header/banner.png';
import { ReactComponent as Meta } from '../../../../assets/img/icons/meta.svg';
import MintModal from '../../../molecules/Modals/MintModal/index';
import { useModals } from '../../../../context/Modal';

const FirstBlock: React.FC = () => {
  const { setModal } = useModals();
  return (
    <section className={s.block}>
      <div className={s.block_inner}>
        <div className={s.banner}>
          <Meta />
          <img src={banner} alt="banner" className={s.banner} />
        </div>
        <Button title="Mint-a-sack" className={s.button} onClick={() => setModal('txHash')} />
      </div>
      <MintModal type="COMMON" img="" txHash="txHash" id={0} />
    </section>
  );
};

export default FirstBlock;
