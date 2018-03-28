import React from 'react';
import Header from '../filler-components/Header';
import {Table, Row, Cell} from 'react-responsive-table';
import ipa from '../../images/container-imgs/ipa.jpg';
import paleale from '../../images/container-imgs/paleale.jpg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import pils from '../../images/container-imgs/pils.jpg';
import stout from '../../images/container-imgs/stout.jpg';
import styles from '../inline-styles/material-styles'

const Beers = (props) => (
  <div>
    <Header title="Oluet" handleToggle={props.handleToggle}/>
      <Table className="beer-gallery" style={styles.beerGallery}>
        <Row material header key="row1">
          <Cell minWidthPx={250} key="cell1"><h4>Hagert IPA (7,2 %)</h4><img src={ipa}/></Cell>
          <Cell minWidthPx={250} key="cell2"><h4>Beard Pale Ale (4,7 %)</h4><img src={paleale}/></Cell>
          <Cell minWidthPx={250} key="cell3"><h4>Moustache Pils (5,8 %)</h4><img src={pils}/></Cell>
          <Cell minWidthPx={250} key="cell4"><h4>Macho Stout (9,0 %)</h4><img src={stout}/></Cell>
        </Row>
      </Table>
  </div>
);

export default Beers;