import React from 'react';
import Header from '../filler-components/Header';
import SlideShow from "../filler-components/SlideShow";

const Home = () => {
    const pgraph = "Pienpanimo, oluet ja kiertolaisuus. Klassikko jo syntyessään. Jo vuodesta 2014.";
  
    return (
      <div className="app-container">
        <Header title="Gypsy Brewing" p={pgraph}/>
        <SlideShow/>
      </div>
    )
  }

export default Home;