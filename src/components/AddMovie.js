import React from 'react';
import movies from '../data/movies';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)

    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e) {
  //   let searchWord = e.target.value;
  //   let searchWordLength = searchWord.length;
  //   let selectedVideos = [];
  //   for (let i = 0; i < movies.length; i++) {
  //     if (movies[i].title.slice(0, searchWordLength) === searchWord) {
  //       selectedVideos.push(movies[i]);
  //     } 
  //   }
  //   if (selectedVideos.length === 0) {
  //     selectedVideos.push({title: 'Unfortunately, we do not yet have any movies by that name. Please email us so we can add it.'});
  //   }
  //   this.props.onChange(selectedVideos);
  // }

  render() {
    return (
      <div>
      <input className="input-text" type="text" placeholder="Add Movie Title Here"/>
      <button className="bkg-primary">Add</button>
      </div>
    );
  }
}

export default AddMovie;