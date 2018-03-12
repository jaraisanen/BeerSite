import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = (props) => (
  <div>
      <Jumbotron className="jumbotron-fluid">
            <h1 >{props.title}</h1>
            <p>{props.p}</p>
      </Jumbotron>
  </div>     
  );

  export default Header;