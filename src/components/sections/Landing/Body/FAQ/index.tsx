import { useState } from 'react';
import cn from 'classnames';

import arrow from '../../../../../assets/img/icons/arrow.svg';
import arrowWhite from '../../../../../assets/img/icons/arrowWhite.svg';

import s from './FAQ.module.scss';


interface IFAQItemProps {
  title: string;
  subtitle: string;
}

const FAQItem: React.FC<IFAQItemProps> = ({ title, subtitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(s.item, { [s.itemActive]: isOpen })}
      tabIndex={0}
      onKeyDown={() => {}}
      role="button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={cn(s.item_title, { [s.item_titleActive]: isOpen })}>
        {title}
        <img src={isOpen ? arrowWhite : arrow} alt="arrow" className={s.arrow} />
      </div>
      <div className={cn(s.item_subtitle, { [s.active]: isOpen })}>{subtitle}</div>
    </div>
  );
};

const FaqData = [
  {
    id: 1,
    title: 'What is an NFT?',
    subtitle:
      'Non-Fungible Token (NFT) is a unique and non-interchangeable unit of data on the blockchain stored on a digital ledger. Its purpose is to establish the proof of ownership of digital assets such as jpg, videos, gifs and more.',
  },
  {
    id: 2,
    title: 'What is a Metabunny?',
    subtitle:
      'Metabunny is an NFT created by a team of NFT enthusiasts who would like to build a community full of fun and games! Every Metabunny has a scary meter which will determine how scary or cute the bunny is. The more scary you are, or in some cases the less scary you are, the more rewards you will be able to yield!',
  },
  {
    id: 3,
    title: 'What can I do with my Metabunny?',
    subtitle:
      'Each Metabunny acts as a membership to join our community where many different events such as poker nights, video game contests, art contests, trivia game awaits you. You will also be able to buy merchandises as well as receiving other benefits exclusive to Metabunny owners. Be sure to change your social media’s profile picture and tell your friends and family about it! ',
  },
  {
    id: 4,
    title: 'How can I get a Metabunny?',
    subtitle:
      'In order to get a Metabunny, all you need is a MetaMask wallet with some Ethereum in it, then you are good to go!',
  },
  {
    id: 5,
    title: 'Where can I get my Metabunny?',
    subtitle:
      'You can get a Metabunny through our website when our presale and public sale launches. After that, it will be available for purchase on Opensea for second hand purchases.',
  },
  {
    id: 6,
    title: 'When can I get my Metabunny?',
    subtitle:
      'Stay tuned for updates on our Twitter, Official Website, Discord Channel for any news regarding to the launch time and our future plans!',
  },
  {
    id: 7,
    title: 'How to get OG status?',
    subtitle:
      'We will be giving out OG status to the first 500 discord members that joined the server. Please be sure to share with any friends or fam that might be interested.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section className={s.section} id="faq">
      <div className={s.section_inner}>
   
        <div className={s.title}>FAQ</div>
        <div className={s.faqs}>
          {FaqData.map((data) => (
            <FAQItem key={data.id} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
