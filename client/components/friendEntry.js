import React from 'react';

var SavedFriendEntry = (props) => (
  <div className='saved-place-entry animated fadeIn'>
    <p className='saved-place-name'>{ props.savedFriend.name }</p>
    <img src={props.savedFriend.image}/>
    <div>
      <a className='saved-place-entry-link' href={props.savedFriend.url}
      target='_blank'>View Friend</a>
      <span className='place-entry-link-divider'>&middot;</span>
      
    </div>
  </div>
);

export default SavedFriendEntry;

