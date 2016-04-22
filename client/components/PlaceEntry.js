import React, {Component} from 'react';
import { connect } from 'react-redux';
import SkyLight from 'react-skylight';

class PlaceEntry extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault;
    this.props.onSaveClick(this.props.place, this.props.user);
  }

  render() {
    return (
      <div className='place-entry animated fadeInUp'>
        <div className='place-info' >
            <h4>{ this.props.place.name }</h4>
            <p>{ this.props.place.address }</p>
            <p>Rating: { this.props.place.rating }</p> 
            <p>Price Level: { this.props.place.price_level} </p>
            <p>Reviews: { this.props.place.review.text } </p>
            <div>
              <a className='place-entry-link' href={'//www.images.google.com/search?q=' + this.props.place.name + ' ' + this.props.place.address + '&tbm=isch'}
              target='_blank'>View Images</a>
              <span className='place-entry-link-divider'>&middot;</span>
              <a className='place-entry-link' href={'//www.google.com/search?q=' + this.props.place.name + ' ' + this.props.place.address}
              target='_blank'>Find on Google</a>
              <span className='place-entry-link-divider'>&middot;</span>
              <a className='place-entry-link' href={'https://maps.google.com?saddr=Current+Location&daddr=' + this.props.place.address}
              target='_blank'>Show Directions</a>
            </div>
        </div>
        <div className='place-entry-favorite'>
          <span onClick={this.handleClick.bind(this)} className='icon-heart' aria-hidden='true'></span>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveClick: (place, user) => {
      $.ajax({
        url: '/api/places/saved',
        method: 'POST',
        data: {user: user, place: place}
      });
      dispatch(actions.savePlace(place));
    }
  };
};

export default connect(mapStateToProps)(PlaceEntry);
