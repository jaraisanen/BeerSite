import React, {Component} from 'react';
import Header from '../filler-components/Header';
import brewery from '../../images/brewery.jpg';

export default class Brewery extends Component {
  render() {
    return(
      <div>
        <Header title="Panimo" />
        <img className="banner-container" src={brewery} /> 
        <article className = "contact-container">
            <h2>Tiedot panimosta </h2>
            <h4>Panimomme sijaitsee Orimattilan keskustan lähettyvillä. Panimolaitteistomme koostuu 3000 litran keittolaitteistosta sekä 2x 4000 ja 5x 3000 litran kypsytystankkista. Pullotamme tuotteemme omalla linjastollamme tai kegitetään ravintoloille hanatuotteiksi.</h4> 
              <p>Gypsy Brewing Oy <br/>
              Tullinkatu 2 <br/>
              16300 Orimattila</p><br/>
        </article>
      </div>
    );
  }
}

