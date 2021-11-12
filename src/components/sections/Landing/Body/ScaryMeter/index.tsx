import { useState } from 'react';
import cn from 'classnames';

import bunny from '../../../../../assets/img/sections/landing/body/bunny1.png';
import Button from '../../../../atoms/Button';
import SimpleSlider from '../../../../atoms/Carousel';

import s from './ScaryMeter.module.scss';

const levels = [
  {
    key: 1,
    title: 'level 1',
    descr:
      '10% of profit will go to community wallet on buying hidden gems (non-blue chip projects)',
  },
  {
    key: 2,
    title: 'level 2',
    descr:
      '20% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 20% of profit will go to community wallet on buying hidden gems (non-blue chip projects)',
  },
  {
    key: 3,
    title: 'level 3',
    descr:
      '30% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 30% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 30% of profit will go to community wallet on buying hidden gems (non-blue chip projects)',
  },
  {
    key: 4,
    title: 'level 4',
    descr:
      '40% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 40% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 40% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 40% of profit will go to community wallet on buying hidden gems (non-blue chip projects)',
  },
  {
    key: 5,
    title: 'level 5',
    descr:
      '50% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 50% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 50% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 50% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 50% of profit will go to community wallet on buying hidden gems (non-blue chip projects)',
  },
];

const ScaryMeter: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState(levels[0]);

  const handleLevel = (level: any) => {
    setActiveLevel(level);
  };

  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className={cn(s.title, s.titlePadding)}>Project</div>
        <div className={s.info}>
          <div className={s.text}>
            Meta Bunny consists of 8,888 Bunnies completely generated via computer algorithm. Their
            existence is to scare people but unfortunately not all of them Looks scary, sadly some
            are even cute! Every Bunny has a scare meter which represents how scary are they. This
            will be based on their accessory, appearance and the location they choose to scare
            people.
          </div>
        </div>
        <div className={s.title}>Scary Meter</div>
        <div className={s.top}>
          <div className={s.left}>
            <div className={s.levels}>
              {levels.map((level: any) => (
                <Button
                  title={level.title}
                  className={cn(s.level, { [s.active]: level.key === activeLevel.key })}
                  onClick={() => handleLevel(level)}
                  insideShadow
                />
              ))}
            </div>
            <div className={s.levelsMobile}>
              <SimpleSlider classNameProp={s.slider} slidesToShow={1}>
                {levels.map((level: any) => {
                  return (
                    <Button
                      title={level.title}
                      className={cn(s.level, { [s.active]: level.key === activeLevel.key })}
                      onClick={() => handleLevel(level)}
                      insideShadow
                    />
                  );
                })}
              </SimpleSlider>
            </div>
          </div>
          <div className={s.right}>
            <img src={bunny} alt="bunny" className={s.image} />
          </div>
        </div>
        <div className={s.nftsMobile}>
          <SimpleSlider classNameProp={s.slide} dots>
            {[1, 2, 3, 4, 5].map(() => (
              <div className={s.nft}>
                <img src={bunny} alt="bunny" className={s.nftImage} />
              </div>
            ))}
          </SimpleSlider>
        </div>
      </div>
      <div className={s.nfts}>
        <SimpleSlider classNameProp={s.slide} slidesToShow={4} dots>
          {[1, 2, 3, 4, 5].map(() => (
            <div className={s.nft}>
              <img src={bunny} alt="bunny" className={s.nftImage} />
            </div>
          ))}
        </SimpleSlider>
      </div>
    </section>
  );
};

export default ScaryMeter;
