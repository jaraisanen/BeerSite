import React, {Component} from 'react';
import Navigation from './components/navigation/Navigation';
import Routes from './components/url-components/Routes';
import Footer from './components/filler-components/Footer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import background from './images/background.jpg';
import 'normalize.css';

import "normalize.css";
import "../styles/index.scss";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleToggle = () => this.setState({
    open: !this.state.open
  });

  render() {
    return (
      <div>
        <img className="background-pic" src={background}/>
        <Navigation open={this.state.open}/>
        <Routes handleToggle={this.handleToggle}/>
        <Footer/>
      </div>
    );
  }
}
