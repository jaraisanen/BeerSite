import React from 'react';
import Header from '../filler-components/Jumbotron';

const Beer = (props) => (
    <div className="beer-container">
      <Header title={props.title}/>
      <div align="center" className="beer-gallery">
        <div class ="contain"><img src={props.img}/>
        <h4>{props.properties}</h4>
        <table>  
          <tr>
            <th>Ainekset</th>
            <td>{props.ingredients}</td>
          </tr>
          <tr>
            <th>Maltaat</th>
            <td>{props.malts}</td>
          </tr>
          <tr>
            <th>Humalat</th>
            <td>{props.hops}</td>
          </tr>
          <tr>
            <th>Katkeruus</th>
            <td>{props.bitterness} EBU</td>
          </tr>
          <tr>
            <th>Väri</th>
            <td>{props.color} EBC</td>
          </tr>   
        </table>    
        </div> 
      </div>
    </div>
  );

  export default Beer;