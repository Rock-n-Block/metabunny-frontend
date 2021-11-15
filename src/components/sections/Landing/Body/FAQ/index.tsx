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
      'Each Metabunny acts as a membership card to join our community where many different events such as poker nights, video game contests, art contests, trivia game awaits you. You will also be able to buy merchandises as well as receiving other benefits exclusive to Metabunny owners. Be sure to change your social media’s profile picture and tell your friends and family about it!',
  },
  {
    id: 2,
    title: 'What is a Metabunny?',
    subtitle:
      'Each Metabunny acts as a membership card to join our community where many different events such as poker nights, video game contests, art contests, trivia game awaits you. You will also be able to buy merchandises as well as receiving other benefits exclusive to Metabunny owners. Be sure to change your social media’s profile picture and tell your friends and family about it!',
  },
  {
    id: 3,
    title: 'What can I do with my Metabunny?',
    subtitle:
      'Each Metabunny acts as a membership card to join our community where many different events such as poker nights, video game contests, art contests, trivia game awaits you. You will also be able to buy merchandises as well as receiving other benefits exclusive to Metabunny owners. Be sure to change your social media’s profile picture and tell your friends and family about it!',
  },
  {
    id: 4,
    title: 'How can I get a Metabunny?',
    subtitle:
      'Each Metabunny acts as a membership card to join our community where many different events such as poker nights, video game contests, art contests, trivia game awaits you. You will also be able to buy merchandises as well as receiving other benefits exclusive to Metabunny owners. Be sure to change your social media’s profile picture and tell your friends and family about it!',
  },
  {
    id: 5,
    title: 'Where can I get my Metabunny?',
    subtitle:
      'Each Metabunny acts as a membership card to join our community where many different events such as poker nights, video game contests, art contests, trivia game awaits you. You will also be able to buy merchandises as well as receiving other benefits exclusive to Metabunny owners. Be sure to change your social media’s profile picture and tell your friends and family about it!',
  },
  {
    id: 6,
    title: 'When can I get my Metabunny?',
    subtitle:
      'Each Metabunny acts as a membership card to join our community where many different events such as poker nights, video game contests, art contests, trivia game awaits you. You will also be able to buy merchandises as well as receiving other benefits exclusive to Metabunny owners. Be sure to change your social media’s profile picture and tell your friends and family about it!',
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
