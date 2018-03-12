import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../filler-components/Header';
import ipa from '../../images/container-imgs/ipa.jpg';
import paleale from '../../images/container-imgs/paleale.jpg';
import pils from '../../images/container-imgs/pils.jpg';
import stout from '../../images/container-imgs/stout.jpg';
import witbier from '../../images/container-imgs/witbier.jpg';


const Beers = () => (
  <div>
   <Header title="Oluet" />
    <div className="beer-gallery">
            <tr className>
              <th>Hagert IPA (7,2 %)</th>
              <th>Beard Pale Ale (4,7 %)</th>
            </tr>
            <tr>
              <th><Link
                    to='/oluet/ipa'
                    className="nav-link"
                  ></Link>         
                <img src={ipa}/>
              </th>
              <td>  
                <img src={paleale}/>
              </td>
            </tr>
            <tr>
              <th>Moustache Pils (5,8 %)</th>
              <th>Macho Stout (9,0 %)</th>
            </tr>
            <tr>
              <th>      
                <img src={pils}/>
              </th>
              <td>
                <img src={stout}/>
              </td>
            </tr>
            <tr>
              <th>Her Majesty Witbier (5,0 %)</th>
            </tr>
            <tr>
              <th>  
                <img src={witbier}/>
              </th>
            </tr>       
        </div>
      </div>
  );

  export default Beers;