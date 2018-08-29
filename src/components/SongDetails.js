import React from 'react';
import Song from './Song.js';

const SongDetails = function (props) {
  if (!props.songs) return null;

  const songsArray = props.songs.map((song, index) => {
    return(
      <Song title = {song["im:name"].label} artist={song["im:artist"].label} key={index} image= {song["im:image"][2].label} soundBite={song.link[1].attributes}/>)
});

//
return (
<ul>{songsArray}</ul>
);
}

export default SongDetails;
