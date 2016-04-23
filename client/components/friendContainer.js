import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import FriendEntry from './FriendEntry';
import actions from '../actions/index.js';
import $ from 'jquery';

class FriendContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.saveFriend.length === 0) {

      // there are no saved places, so show an empty state
      return (
        <div className='col-4-12 saved-places'>
          <h3>Your Saved Places</h3>
          <div className='no-saved-places'>
            <p>
              If you like a place, click the &hearts; to save it for later.
            </p>
          </div>
        </div>
      );
    } else {

      // there are saved places, so display them
      return (
        <div className='col-4-12 saved-places'>
          <h3>Your Saved Places</h3>
          { this.props.saveFriend.map((savedFriend) => (
            <div>
              <FriendEntry savedFriend={savedFriend} />
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    saveFriend: state.saveFriend
  };
};

FriendContainer.propTypes = {
  saveFriend: PropTypes.array,
};

export default connect(
  mapStateToProps
)(FriendContainer);
