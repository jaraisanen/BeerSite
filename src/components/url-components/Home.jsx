import React from 'react';
import Header from '../filler-components/Header';
import SlideShow from "../filler-components/SlideShow";
import taps from '../../images/taps.jpeg';
import cask from '../../images/cask.jpg';
import beers from '../../images/beers.jpg';

const Home = (props) => {
  const pgraph = "Pienpanimo, oluet ja kiertolaisuus. Klassikko jo syntyessään. Jo vuodesta 2014.";

  return (
    <div className="app-container">
      <Header handleToggle={props.handleToggle} title="Gypsy Brewing" p={pgraph}/>
      <SlideShow
        condition={true}
        pic1={taps}
        pic2={cask}
        pic3={beers}
        legend1={"Löydät oluttamme hanasta"}
        legend2={"tynnyristä"}
        legend3={"ja kätevästi pulloista!"}/>
    </div>
  )
}

export default Home;