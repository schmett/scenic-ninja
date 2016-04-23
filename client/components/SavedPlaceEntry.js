import React from 'react';

var SavedPlaceEntry = (props) => (
  <div className='saved-place-entry animated fadeIn'>
    <p className='saved-place-name'>{ props.savedPlace.name }</p>
    <p className='saved-place-address'>{ props.savedPlace.address }</p>
    <div>
      <a className='saved-place-entry-link' href={'//www.images.google.com/search?q=' + props.savedPlace.name + ' ' + props.savedPlace.address + '&tbm=isch'}
      target='_blank'>View Images</a>
      <span className='place-entry-link-divider'>&middot;</span>
      <a className='saved-place-entry-link' href={'//www.google.com/search?q=' + props.savedPlace.name + ' ' + props.savedPlace.address}
      target='_blank'>Find on Google</a>
    </div>
  </div>
);

export default SavedPlaceEntry;
