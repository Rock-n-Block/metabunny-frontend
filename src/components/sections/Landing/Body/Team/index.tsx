import ellipse from '../../../../../assets/img/sections/landing/body/ellipse.png';
import ellipse2 from '../../../../../assets/img/sections/landing/body/ellipse2.png';
import ellipse3 from '../../../../../assets/img/sections/landing/body/ellipse3.png';
import s from './Team.module.scss';



const Team: React.FC = () => {
  return (
  <section className={s.section} id="team">
    <div className={s.title}>Team</div>
    <div className={s.content}>
      <div className={s.teammates}>
        <div className={s.teammate}>
          <img src={ellipse} alt="avatar" className={s.avatar} />
          <span className={s.name}>Riichi</span>
          <span className={s.description}>He has worked in a famous auction house as a Contemporary Art Specialist and has been obsessed with NFTs after being introduced by a friend. He is also a former World of Warcraft Guild master.</span>
        </div>
      </div>
      <div className={s.teammates}>
        <div className={s.teammate}>
          <img src={ellipse2} alt="avatar" className={s.avatar} />
          <span className={s.name}>Anson</span>
          <span className={s.description}>Lead Artist for the project. Former 3D animator at a VR game company. Passionate in playing video games and watching Japanese anime. He has sacraficed his life for this project.</span>
        </div>
      </div>
      <div className={s.teammates}>
        <div className={s.teammate}>
          <img src={ellipse3} alt="avatar" className={s.avatar} />
          <span className={s.name}>ZEN</span>
          <span className={s.description}>ZEN is the Head of Cryptocurrency at HKD.com. He was introduced to Bitcoin since its inception, and began researching and investing heavily into crypto assets since the birth of Ethereum.</span>
        </div>
      </div>
    </div> 
  </section>
  );
};

export default Team;
