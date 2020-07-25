import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newMovie: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({title: this.state.newMovie});
    this.setState({
      newMovie: ''
    })
  }

  handleChange(e) {
    this.setState({
      newMovie: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="input-text" type="text" placeholder="Add Movie Title Here" value={this.state.newMovie} onChange={this.handleChange}/>
        <button className="bkg-primary">Add</button>
      </form>
    );
  }
}

export default AddMovie;