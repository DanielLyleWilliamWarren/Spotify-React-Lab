import React from 'react';
import './song.css'

const Song = function (props) {
  console.log(props);
    return (
      <div className="results-table">
      <table className="table">
        <tr>
        <td>{props.title}</td>
        <td>{props.artist}</td>
        <td> <img src = {props.image}/> </td>
      </tr>
      </table>
      </div>
    );
}

export default Song;
