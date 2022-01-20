import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import arrow from '../../../../../assets/img/icons/arrow.svg';
import arrowWhite from '../../../../../assets/img/icons/arrowWhite.svg';
import plogo1 from '../../../../../assets/img/icons/plogo1.jpg';
import plogo2 from '../../../../../assets/img/icons/plogo2.png';
import plogo3 from '../../../../../assets/img/icons/plogo3.jpg';
import plogo4 from '../../../../../assets/img/icons/plogo4.png';
import plogo5 from '../../../../../assets/img/icons/plogo5.png';
import plogo6 from '../../../../../assets/img/icons/plogo6.jpg';
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

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  const FaqData = useMemo(
    () => [
      {
        id: 1,
        title: t('faq.faq1.title'),
        subtitle: t('faq.faq1.text'),
      },
      {
        id: 2,
        title: t('faq.faq2.title'),
        subtitle: t('faq.faq2.text'),
      },
      {
        id: 3,
        title: t('faq.faq3.title'),
        subtitle: t('faq.faq3.text'),
      },
      {
        id: 4,
        title: t('faq.faq4.title'),
        subtitle: t('faq.faq4.text'),
      },
      {
        id: 5,
        title: t('faq.faq5.title'),
        subtitle: t('faq.faq5.text'),
      },
      {
        id: 6,
        title: t('faq.faq6.title'),
        subtitle: t('faq.faq6.text'),
      }
    ],
    [t],
  );

  return (
    <section className={s.section} id="faq">
      <div className={s.section_inner}>
        <div className={s.title}>FAQ</div>
        <div className={s.faqs}>
          {FaqData.map((data) => (
            <FAQItem key={data.id} {...data} />
          ))}
        </div>
        <div className={s.title} id="whitelist">{t('whitelist.title')}</div>
        <div className={s.text}>
          <li><b>{t('whitelist.01')}</b></li>
          <li>{t('whitelist.02')}<a href="https://twitter.com/metabunnynft" target="_blank" rel="noreferrer">https://twitter.com/metabunnynft</a>{t('whitelist.03')}<a href="https://instagram.com/metabunny.nft" target="_blank" rel="noreferrer">https://instagram.com/metabunny.nft</a></li>
          <li>{t('whitelist.04')}<a href="https://discord.gg/metabunnynft" target="_blank" rel="noreferrer">https://discord.gg/metabunnynft</a></li>
          <li>
          {t('whitelist.05')}<br />
          {t('whitelist.06')}<a href="https://twitter.com/metabunnynft/status/1482668240371601417" target="_blank" rel="noreferrer">https://twitter.com/metabunnynft/status/1482668240371601417</a>
          {t('whitelist.07')}<a href="https://www.instagram.com/p/CYyfJ_PL5Yj/" target="_blank" rel="noreferrer">https://www.instagram.com/p/CYyfJ_PL5Yj/</a>
          </li>
          <li>
          {t('whitelist.08')}<a href="https://www.hkd.com/download/en.html" target="_blank" rel="noreferrer">https://www.hkd.com/download/en.html</a>
          </li>
          <li>
          {t('whitelist.09')}<a href="https://forms.gle/3YDYybax9cZJrE3c6" target="_blank" rel="noreferrer">https://forms.gle/3YDYybax9cZJrE3c6</a></li>
        </div>
      </div>

       <div className={s.logo} id="logo">
        <div className={s.creator}>
          <div className={s.subTitle}>Creator:</div>
          <a href="https://www.hkd.com/" target="_blank" rel="noreferrer">
            <img src={plogo4} alt="" />
          </a>
        </div>
        <div className={s.partners}>  
          <div className={s.subTitle}>Partners:</div>

            <a href="https://www.huobi.com/zh-cn/" target="_blank" rel="noreferrer">
              <img src={plogo2} alt=""  className={s.plogo2}/>
            </a>
            <a href="https://times.capital/" target="_blank" rel="noreferrer">
              <img src={plogo3} alt="" className={s.plogo3}/>
            </a>
            <a href="https://monaconft.io/discover" target="_blank" rel="noreferrer">
              <img src={plogo1} alt="" className={s.plogo1}/>
            </a>

         </div>
          <div className={s.three}>  
           <div className={s.subTitle}>Privileges Providers:</div>
           <a href="https://www.three.com.hk/tc/home.html" target="_blank" rel="noreferrer">
              <img src={plogo5} alt="" className={s.logo5} />
            </a>
            <a href="https://www.zfu.com/" target="_blank" rel="noreferrer">
              <img src={plogo6} alt="" className={s.plogo6}/>
            </a>
          </div>
      </div>
    </section>
  );
};

export default FAQ;
