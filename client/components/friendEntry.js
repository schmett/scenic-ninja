import React from 'react';

var SavedFriendEntry = (props) => (
  <div className='saved-place-entry animated fadeIn'>
    <p className='saved-place-name'>{ props.savedFriend.name }</p>
    <p className='saved-place-address'>{ props.savedFriend.googleFriendId }</p>
    <div>
      <a className='saved-place-entry-link' href={'//www.images.google.com/search?q=' + props.savedFriend.url}
      target='_blank'>View Friend</a>
      <span className='place-entry-link-divider'>&middot;</span>
      
    </div>
  </div>
);

export default SavedFriendEntry;

