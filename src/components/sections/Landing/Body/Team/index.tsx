import { useEffect, useState } from 'react';

import ellipse from '../../../../../assets/img/sections/landing/body/ellipse.png';
import ellipse2 from '../../../../../assets/img/sections/landing/body/ellipse2.png';
import ellipse3 from '../../../../../assets/img/sections/landing/body/ellipse3.png';
import SimpleSlider from '../../../../atoms/Carousel';

import s from './Team.module.scss';

const teammates = [
  {
    avatar: ellipse2,
    name: 'Riichi',
    descr:
      'He has worked in a famous auction house as a Contemporary Art Specialist and has been obsessed with NFTs after being introduced by a friend. He is also a former World of Warcraft Guild master.',
  },
  {
    avatar: ellipse3,
    name: 'Anson',
    descr:
      'Lead Artist for the project. Former 3D animator at a VR game company. Passionate in playing video games and watching Japanese anime. He has sacraficed his life for this project.',
  },
  {
    avatar: ellipse,
    name: 'ZEN',
    descr:
      'ZEN is the Head of Cryptocurrency at HKD.com. He was introduced to Bitcoin since its inception, and began researching and investing heavily into crypto assets since the birth of Ethereum. ',
  },
];

const Team: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(4);

  const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return width;
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth <= 1200) {
      setSlides(3);
    }
    if (windowWidth <= 900) {
      setSlides(2);
    }
    if (windowWidth <= 600) {
      setSlides(1);
    }
  }, [windowWidth]);

  return (
    <section className={s.section} id="team">
      <div className={s.title}>Team</div>
      <div className={s.content}>
        <div className={s.teammates}>
          {teammates.map((teammate: any) => (
            <div className={s.teammate}>
              <img src={teammate.avatar} alt="avatar" className={s.avatar} />
              <span className={s.name}>{teammate.name}</span>
              <span className={s.description}>{teammate.descr}</span>
            </div>
          ))}
        </div>
        <div className={s.teammatesMobile}>
          <SimpleSlider classNameProp={s.slide} slidesToShow={slides} showArrows>
            {teammates.map((teammate: any) => (
              <div className={s.teammate}>
                <img src={teammate.avatar} alt="avatar" className={s.avatar} />
                <span className={s.name}>{teammate.name}</span>
                <span className={s.description}>{teammate.descr}</span>
              </div>
            ))}
          </SimpleSlider>
        </div>
      </div>
    </section>
  );
};

export default Team;
