import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';

import Header from './Header';
import PlaceContainer from './PlaceContainer';
import FriendContainer from './friendContainer';
import SavedPlaceContainer from './SavedPlaceContainer';
import searchGooglePlaces from '../utils/searchGooglePlaces.js';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='grid'>
          <PlaceContainer/>
          <SavedPlaceContainer/>
          <FriendContainer/>
        </div>
      </div>
    );
  }
}

export default App;
