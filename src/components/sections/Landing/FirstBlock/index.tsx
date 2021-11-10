// import { useModals } from '../../../../context/Modal';
// import Button from '../../../atoms/Button';
import MintModal from '../../../molecules/Modals/MintModal/index';
import bunny from '../../../../assets/img/sections/landing/first-block/bg.png';

import s from './FirstBlock.module.scss';

const FirstBlock: React.FC = () => {
  return (
    <section className={s.block}>
      {/* <div className={s.block_inner}> */}
        {/* <Button title="Mint" className={s.button} onClick={() => setModal('txHash')} /> */}
      {/* </div> */}
      <MintModal type="COMMON" img="" txHash="txHash" id={0} />
      <img src={bunny} alt="bunny" className={s.bunny} />
    </section>
  );
};

export default FirstBlock;
