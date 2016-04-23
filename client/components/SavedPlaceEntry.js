// import React from 'react';

// var SavedPlaceEntry = (props) => (
//   <div className='saved-place-entry animated fadeIn'>
//     <p className='saved-place-name'>{ props.savedPlace.name }</p>
//     <p className='saved-place-address'>{ props.savedPlace.address }</p>
//     <div>
//       <a className='saved-place-entry-link' href={'//www.images.google.com/search?q=' + props.savedPlace.name + ' ' + props.savedPlace.address + '&tbm=isch'}
//       target='_blank'>View Images</a>
//       <span className='place-entry-link-divider'>&middot;</span>
//       <a className='saved-place-entry-link' href={'//www.google.com/search?q=' + props.savedPlace.name + ' ' + props.savedPlace.address}
//       target='_blank'>Find on Google</a>
//     </div>
//   </div>
// );

// export default SavedPlaceEntry;




import React, {Component} from 'react';
import { connect } from 'react-redux';

class SavedPlaceEntry extends Component {
  constructor(props) {
    super(props);
    this.submitClick.bind(this);
  }

  submitClick(e) {
    e.preventDefault;
    this.props.onDeleteClick(this.props.place, this.props.user);
  }
  
render() {

return (
  <div className='saved-place-entry animated fadeIn'>
    <p className='saved-place-name'>{ this.props.savedPlace.name }</p>
    <p className='saved-place-address'>{ this.props.savedPlace.address }</p>
    <div>
      <a className='saved-place-entry-link' href={'//www.images.google.com/search?q=' + this.props.savedPlace.name + ' ' + this.props.savedPlace.address + '&tbm=isch'}
      target='_blank'>View Images</a>
      <span className='place-entry-link-divider'>&middot;</span>
      <a className='saved-place-entry-link' href={'//www.google.com/search?q=' + this.props.savedPlace.name + ' ' + this.props.savedPlace.address}
      target='_blank'>Find on Google</a>

      <div>
        <div className='col-2-12'></div>
        <div id='loading-container' className='col-6-12'>
          { this.props.savedPlace.map((place) => (
            <div>
              <SavedPlaceEntry onDeleteClick={this.props.onDeleteClick} savedPlace={ place }></SavedPlaceEntry>
            </div>
          ))}
        </div>
      </div>

      <div className = 'animated fadeInUp'>
        <span onClick = {this.submitClick.bind(this)} className = 'icon-delete' aria-hidden='true'></span> 
      </div>

    </div>
  </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user};
};

export default connect(mapStateToProps)(SavedPlaceEntry);