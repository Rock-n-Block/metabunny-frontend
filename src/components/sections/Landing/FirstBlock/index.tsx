// import { useModals } from '../../../../context/Modal';
// import Button from '../../../atoms/Button';
import MintModal from '../../../molecules/Modals/MintModal/index';
import bunny from '../../../../assets/img/sections/landing/first-block/bunny.gif';
import bg from '../../../../assets/img/sections/landing/body/bg_upside.png';

import s from './FirstBlock.module.scss';

const FirstBlock: React.FC = () => {
  return (
    <section className={s.block}>
      <MintModal type="COMMON" img="" txHash="txHash" id={0} />
      <img src={bunny} alt="bunny" className={s.bunny} />
      <img src={bg} alt="bg" className={s.bg} />
    </section>
  );
};

export default FirstBlock;
