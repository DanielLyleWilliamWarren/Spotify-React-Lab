import React from 'react';

const Song = function (props) {
  console.log(props);
    return (
      <div>
      <li>
        <h4>{props.title}</h4>
        <h4>{props.artist}</h4>
      </li>
      </div>
    );
}

export default Song;
