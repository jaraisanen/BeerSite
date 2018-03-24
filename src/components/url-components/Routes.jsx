import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Beers from './Beers';
import Brewery from './Brewery';
import Form from './Form';

const Routes = (props) => (
  <main>
    <Switch>
      <Route exact path="/" render={()=> <Home handleToggle={props.handleToggle}/>}/>
      <Route path="/oluet"  render={()=> <Beers handleToggle={props.handleToggle}/>}/>
      <Route path="/panimo"  render={()=> <Brewery handleToggle={props.handleToggle}/>}/>
      <Route path="/contact"  render={()=> <Form handleToggle={props.handleToggle}/>}/>
    </Switch>
  </main>
)

export default Routes;
