import React, { Component } from 'react';
import MovieActions from '../actions/MovieActions';
import { browserHistory } from 'react-router';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieKeyword: ""
    };
    this.searchMovie = this.searchMovie.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  searchMovie() {
    var {movieKeyword} = this.state;
    MovieActions.searchMovies(movieKeyword);
    browserHistory.push({ pathname: '/movies' });
  }

  handleKeyPress(target) {
    if(target.charCode == 13){
      this.searchMovie();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row" id="searchBarBG">
          <h2>Search Your Movie...</h2>
          <div className="text-center" id="searchBar">
            <div className='ui big action input text-center'>
              <input type='text' placeholder='Search Keywords...'
                value={this.state.movieKeyword}
                onChange={ e=> {this.setState({movieKeyword: e.target.value}) }}
                onKeyPress={this.handleKeyPress}
              />
              <button className='ui big icon button' role='button' onClick={this.searchMovie}>
                <i aria-hidden='true' className='search icon'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
