import { useEffect, useState } from 'react';
import ellipse from '../../../../../assets/img/sections/landing/body/ellipse.png';
import SimpleSlider from '../../../../atoms/Carousel';

import s from './Team.module.scss';

const teammates = [
  {
    avatar: ellipse,
    name: 'Name Name',
    descr:
      'Text crowdsourced encyclopedia that rewards users for contributing and peer reviewing information. Lunyr was raised almost 48 000 ETH during ICO on April’17. It w',
  },
  {
    avatar: ellipse,
    name: 'Name Name',
    descr:
      'Text crowdsourced encyclopedia that rewards users for contributing and peer reviewing information. Lunyr was raised almost 48 000 ETH during ICO on April’17. It w',
  },
  {
    avatar: ellipse,
    name: 'Name Name',
    descr:
      'Text crowdsourced encyclopedia that rewards users for contributing and peer reviewing information. Lunyr was raised almost 48 000 ETH during ICO on April’17. It w',
  },
  {
    avatar: ellipse,
    name: 'Name Name',
    descr:
      'Text crowdsourced encyclopedia that rewards users for contributing and peer reviewing information. Lunyr was raised almost 48 000 ETH during ICO on April’17. It w',
  },
  {
    avatar: ellipse,
    name: 'Name Name',
    descr:
      'Text crowdsourced encyclopedia that rewards users for contributing and peer reviewing information. Lunyr was raised almost 48 000 ETH during ICO on April’17. It w',
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
      setSlides(3)
    }
    if (windowWidth <= 900) {
      setSlides(2)
    }
    if (windowWidth <= 600) {
      setSlides(1)
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
