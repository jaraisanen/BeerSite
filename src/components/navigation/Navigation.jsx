import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import logo from '../../images/logo.jpg';

export default class Navigation extends Component {
  render() {
    return(
      <div>
        <Drawer 
          className="navigation-container"
          open={this.props.open}
          style={{backgroundColor: 'black'}}
          >

          <img className="nav-logo" src={logo} alt="Logo"/>
          <MenuItem 
            containerElement={
            <Link to='/'>Etusivu
            </Link>}
            primaryText="Etusivu"> 
          </MenuItem>
          <MenuItem 
            containerElement={
            <Link to='/oluet'>Oluet
            </Link>}
            primaryText="Oluet"> 
          </MenuItem>
          <MenuItem 
            containerElement={
            <Link to='/panimo'>Panimo
            </Link>}
            primaryText="Panimo"> 
          </MenuItem>
        </Drawer>
      </div>
    );
  }

}