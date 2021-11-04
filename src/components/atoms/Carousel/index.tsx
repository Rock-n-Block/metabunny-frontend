import React, { FC, PropsWithChildren, useCallback, useState } from 'react';
import nextId from 'react-id-generator';
import Slider, { ResponsiveObject } from 'react-slick';
import cx from 'classnames';

import styles from './styles.module.scss';

type Props = {
  classNameArrowLeft?: string;
  classNameArrowRight?: string;
  classNameProp?: string;
  slidesToShow?: number;
  hideArrows?: boolean;
  responsive?: ResponsiveObject[];
};

const SimpleSlider: FC<PropsWithChildren<Props>> = ({
  classNameProp,
  children,
  // classNameArrowRight,
  slidesToShow = 1,
  responsive,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const [dragging, setDragging] = useState(false);

  const handleBeforeChange = useCallback(
    (oldI, newI) => {
      setActiveSlideIndex(newI);
      setDragging(true);
    },
    [setDragging],
  );

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const handleOnItemClick = useCallback(
    (e) => {
      if (dragging) {
        e.stopPropagation();
        e.preventDefault();
      }
    },
    [dragging],
  );

  const sliderConfig = {
    dots: false,
    infinite: React.Children.count(children) > 3,
    speed: 400,
    slidesToShow,
    slidesToScroll: slidesToShow,
    dotsClass: styles.slickDots,
    customPaging: (i: number) => (
      <div className={cx(styles.indicator, { [styles.active]: i === activeSlideIndex })} />
    ),
    arrows: false,
    centerMode: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    responsive,
  };
  return (
    <Slider className={cx(classNameProp)} {...sliderConfig}>
      {React.Children.map(children, (child) => (
        <div onClickCapture={handleOnItemClick} key={nextId()}>
          {child}
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
