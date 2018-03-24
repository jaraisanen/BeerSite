import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dehaze from 'material-ui/svg-icons/image/dehaze';
import styles from '../inline-styles/material-styles';

export default class Header extends Component {

  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-fluid">
          <FloatingActionButton
            style={styles.button}
            backgroundColor={'rgb(7, 29, 32)'}
            onClick={this.props.handleToggle}
            zDepth={4}>
            <Dehaze/>
          </FloatingActionButton>
          <h1 >{this.props.title}</h1>
          <p>{this.props.p}</p>
        </Jumbotron>
      </div>
    );
  }
}
