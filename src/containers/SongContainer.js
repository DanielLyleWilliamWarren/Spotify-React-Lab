import React, {Component} from 'react';
import SongDetails from '../components/SongDetails.js';
import './container.css'


class SongContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }
  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=200/json';
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((songs) => {
      this.setState({songs: songs.feed.entry})
    })
  }

  render(){
    return(
      <div>
        <h2 className="titlePage">Top 20 Songs!</h2>
        <SongDetails
          songs = {this.state.songs}/>
        </div>
      );
    }
  }

export default SongContainer;
