import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import logo from '../../images/logo.jpg';

import styles from '../inline-styles/material-styles';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Drawer containerStyle={styles.drawer} open={this.props.open}>
          <img className="nav-logo" src={logo} alt="Logo"/>
          <MenuItem
            style={styles.menuItem}
            containerElement={< Link to = '/' > </Link>}
            primaryText="Etusivu"></MenuItem>
          <MenuItem
            style={styles.menuItem}
            containerElement={< Link to = '/oluet' > </Link>}
            primaryText="Oluet"></MenuItem>
          <MenuItem
            style={styles.menuItem}
            containerElement={< Link to = '/panimo' > </Link>}
            primaryText="Panimo"></MenuItem>
          <MenuItem
            style={styles.menuItem}
            containerElement={< Link to = '/contact' > </Link>}
            primaryText="Yhteydenotto"></MenuItem>
        </Drawer>
      </div>
    );
  }

}