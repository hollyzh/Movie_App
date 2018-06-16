import React, { Component } from 'react';
import MoviesStore from '../stores/MoviesStore';


export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MoviesStore.getMovies()
    };
    this._onchange = this._onchange.bind(this);
  }

  componentWillMount() {
    MoviesStore.startListening(this._onchange);
  }

  componentWillUnmount() {
    MoviesStore.stopListening(this._onchange);
  }

  _onchange() {
    this.setState({
      movies: MoviesStore.getMovies()
    })
  }

  render() {
    var {movies} = this.state;
    // console.log(movies);
    return (
      <div className="row">
        Hello
      </div>
    )
  }
};
