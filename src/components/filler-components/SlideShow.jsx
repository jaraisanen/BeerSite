import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import taps from '../../images/taps.jpeg';
import kettle from '../../images/kettle.jpg';
import beers from '../../images/beers.jpg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const SlideShow = () => (
  <Carousel 
    showThumbs={false}
    infiniteLoop={true}
    dynamicHeight={true}>
    <div>
      <img src={taps} />
      <p className="legend"> Löydät oluttamme hanasta </p>
    </div>
    <div>
      <img src={kettle}  />
      <p className="legend"> tynnyristä </p>
    </div>
    <div>
      <img src={beers}  />
      <p className="legend"> tai kätevästi myös pullosta! </p>
    </div>
</Carousel>
);

export default SlideShow;
