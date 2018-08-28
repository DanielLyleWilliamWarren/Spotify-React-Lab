import React from 'react';
import Song from './Song.js';

const SongDetails = function (props) {
  if (!props.songs) return null;
  const songsArray = props.songs.map((song, index) => {
    return(
      <Song title = {song["im:name"].label} artist={song["im:artist"].label} key={index}/>)
});
//
return (
<ul>{songsArray}</ul>
);
}

export default SongDetails;
