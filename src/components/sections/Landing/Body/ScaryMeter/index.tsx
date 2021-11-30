import { useEffect, useState } from 'react';
import cn from 'classnames';

import bunny from '../../../../../assets/img/sections/landing/body/bunny1.png';
import bunny1 from '../../../../../assets/img/sections/landing/body/bunny2.png';
import bunny2 from '../../../../../assets/img/sections/landing/body/bunny3.png';
import bunny3 from '../../../../../assets/img/sections/landing/body/bunny4.png';
import bunny4 from '../../../../../assets/img/sections/landing/body/bunny5.png';
import bunny5 from '../../../../../assets/img/sections/landing/body/bunny6.png';
import cap1 from '../../../../../assets/img/sections/landing/body/cap1.jpg';
import cap2 from '../../../../../assets/img/sections/landing/body/cap2.jpg';
import cap3 from '../../../../../assets/img/sections/landing/body/cap3.jpg';
import cap4 from '../../../../../assets/img/sections/landing/body/cap4.jpg';
import Button from '../../../../atoms/Button';
import SimpleSlider from '../../../../atoms/Carousel';
import SimpleSwiper from '../../../../atoms/Swiper';
import ReactPlayer from 'react-player'
import s from './ScaryMeter.module.scss';

const settings = {
  arrows: true,
  dots: true,
  pauseOnHover: false,
  infinite: true,
  speed: 10,
  autoplay: true,
  fade: true,
  variableWidth: false,
  slidesToScroll: 5,
}

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(5);
  console.log(slides);
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
    if (windowWidth <= 800) {
      setSlides(1);
    }
    if (windowWidth <= 700) {
      setSlides(1);
    }
    if (windowWidth <= 500) {
      setSlides(1);
    }
    // if (windowWidth <= 400) {
    //   setSlides(1)
    // }
  }, [windowWidth]);

  const handleLevel = (level: any) => {
    setActiveLevel(level);
  };

  return (
    <section className={s.section} id="project" >
      <div className={s.content}>
        <div className={cn(s.title, s.titlePadding)}>Project</div>
        <div className={s.info}>
          <div className={s.text}>
          Meta Bunny consists of 10,000 Bunnies completely generated via computer algorithm. Their existence is to scare people but unfortunately not all of them looks scary. Sadly some are even cute! Every Bunny has a scary meter which represents how scary are they. This will be based on their accessory, appearance and the location they choose to scare people. 
          </div>
        </div>
        <div className={s.introTab}>
          <div className={s.carte_button}>Bunnyverse</div>
          <div className={s.carte}>Being the NFT holder will grant you access to our Closed Alpha testing for the Bunnyverse. <p />Not only will you be able to traverse the Bunnyverse, as an NFT holder you will also have a vote on the direction on how you want the project to turn out.
          <p /><img src={cap3} alt="Capscreen" className={s.verse}/>
           </div>
       
          <div className={s.carte_button2}>GameFi</div>
          <div className={s.carte2}>We will be creating a game for Metabunny which you will run around and try to scare people. The more the people felt scared, the more in game tokens ($CARATS) you can earn.
          Therefore your Metabunny’s Scary Meter will affect how much in game tokens you can earn!
            <div className={s.imageContent}>
              <div className={s.images}>
                <img src={cap4} alt="Capscreen" className={s.nftImage} />
                <img src={cap1} alt="Capscreen" className={s.nftImage} />
                <img src={cap2} alt="Capscreen" className={s.nftImage} />
              </div>
            </div>
          </div>
          <div className={s.carte_button2}>Staking</div>
          <div className={s.carte2}>
            <h2>NFT holders can also choose to stake Metabunnies <p />to earn $CARATS and can be used for:</h2>
            <p /> 1) in game token for the upcoming Bunnyverse Project   
            <p /> 2) To purchase future exclusive merchandise
          </div> 
      </div>
        <div className={s.title}>Preview</div>
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
              <SimpleSwiper>
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
              </SimpleSwiper>
              {/* <SimpleSlider classNameProp={s.slider} slidesToShow={1} showArrows>
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
              </SimpleSlider> */}
            </div>
          </div>

        </div>
        <div className={s.nftsMobile}>
          <SimpleSlider classNameProp={s.slide}  slidesToShow={2} dots>
          <div className={s.nft}>
              <img src={bunny} alt="bunny" className={s.nftImage} />
            </div>
            <div className={s.nft}>
              <img src={bunny1} alt="bunny" className={s.nftImage} />
            </div>
            <div className={s.nft}>
              <img src={bunny2} alt="bunny" className={s.nftImage} />
            </div>
            <div className={s.nft}>
              <img src={bunny3} alt="bunny" className={s.nftImage} />
            </div>
            <div className={s.nft}>
              <img src={bunny4} alt="bunny" className={s.nftImage} />
            </div>
            <div className={s.nft}>
              <img src={bunny5} alt="bunny" className={s.nftImage} />
            </div>
          </SimpleSlider>
        </div>
      </div>
      <div className={s.nfts}>
        <SimpleSlider classNameProp={s.slide}   slidesToShow={3}  {...settings}>
            <div className={s.nft}>
              <img src={bunny} alt="bunny" className={s.nftImage} />
            </div>
            <div className={s.nft}>
              <img src={bunny1} alt="bunny" className={s.nftImage} />
            </div>
            <div className={s.nft}>
              <img src={bunny2} alt="bunny" className={s.nftImage} />
            </div>
            <div className={s.nft}>
              <img src={bunny3} alt="bunny" className={s.nftImage} />
            </div>
            <div className={s.nft}>
              <img src={bunny4} alt="bunny" className={s.nftImage} />
            </div>
            <div className={s.nft}>
              <img src={bunny5} alt="bunny" className={s.nftImage} />
            </div>
        </SimpleSlider>
      
      </div>
      <ReactPlayer className={s.videobg}
                    width="100%"
                    url={[
                      {src: 'https://oninwar.com/raw/ward_animation_v2.mp4', type: 'video/mp4'}
                    ]}
                    playsinline
                    playing
                    loop
                    muted
                    config={{
                      file: {
                        attributes: {
                          preload: "auto",
                        },
                      },
                    }}
                />
    </section>
  );
};

export default ScaryMeter;
