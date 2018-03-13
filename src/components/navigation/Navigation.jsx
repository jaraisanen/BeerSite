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
            <Link to='/'>
            </Link>}
            primaryText="Etusivu"> 
          </MenuItem>
          <MenuItem 
            containerElement={
            <Link to='/oluet'>
            </Link>}
            primaryText="Oluet"> 
          </MenuItem>
          <MenuItem 
            containerElement={
            <Link to='/panimo'>
            </Link>}
            primaryText="Panimo"> 
          </MenuItem>
          <MenuItem 
            containerElement={
            <Link to='/contact'>
            </Link>}
            primaryText="Yhteydenotto"> 
          </MenuItem>
        </Drawer>
      </div>
    );
  }

}