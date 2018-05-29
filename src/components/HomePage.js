import React, { Component } from 'react';
import MovieActions from '../actions/MovieActions';


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieKeyword: ""
    };
    this.searchMovie = this.searchMovie.bind(this);
  }

  searchMovie() {
    let {movieKeyword} = this.state;
    MovieActions.searchOneMovie(movieKeyword);
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Movie App</h1>
        <div className="row">
          <div className="text-center">
            <input type="text" placeholder="keywords" className="inputForm"
              value={this.state.movieKeyword}
              onChange={ e=> {this.setState({movieKeyword: e.target.value}) }}
            />
            <button type="submit" className="btn btn-primary" onClick={this.searchMovie}>Search</button>
          </div>
        </div>
      </div>
    )
  }
};
