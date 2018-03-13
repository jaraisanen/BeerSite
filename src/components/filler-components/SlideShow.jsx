import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const SlideShow = (props) => (
  <Carousel 
    showThumbs={false}
    infiniteLoop={true}
    dynamicHeight={props.condition}>
    <div>
      <img src={props.pic1} />
      <p className="legend"> {props.legend1}  </p>
    </div>
    <div>
      <img src={props.pic2}  />
      <p className="legend"> {props.legend2}  </p>
    </div>
    <div>
      <img src={props.pic3}  />
      <p className="legend"> {props.legend3} </p>
    </div>
</Carousel>
);

export default SlideShow;
