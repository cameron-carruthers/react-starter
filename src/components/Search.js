import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let searchWord = e.target.value.toLowerCase();
    this.setState({
      searchInput: e.target.value
    })
    let searchWordLength = searchWord.length;
    let selectedVideos = [];
    let movies = this.props.allMovies;
    for (let i = 0; i < movies.length; i++) {
      let movie = movies[i];
      if (movies[i].title.slice(0, searchWordLength).toLowerCase() === searchWord) {
        selectedVideos.push(movies[i]);
      } 
    }
    if (selectedVideos.length === 0) {
      selectedVideos.push({title: 'Unfortunately, we do not yet have any movies by that name. Please email us so we can add it.'});
    }
    this.props.onChange(selectedVideos);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      searchInput: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="input-text" type="text" placeholder="Search..." value={this.state.searchInput} onChange={this.handleChange}/>
        <button className="bkg-secondary">Go!</button>
      </form>
    );
  }
}

export default Search;