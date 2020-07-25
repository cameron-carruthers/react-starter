import React from 'react';
import movies from '../data/movies';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let searchWord = e.target.value;
    let searchWordLength = searchWord.length;
    let selectedVideos = [];
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title.slice(0, searchWordLength) === searchWord) {
        selectedVideos.push(movies[i]);
      }
    }
    this.props.onChange(selectedVideos);
  }

  render() {
    return (
      <div>
      <input className="search" type="text" onChange={this.handleChange}/>
      <button className="bkg-primary">Go!</button>
      </div>
    );
  }
}

export default Search;