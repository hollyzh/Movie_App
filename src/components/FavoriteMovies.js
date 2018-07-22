import React, { Component } from 'react';
import MoviesStore from '../stores/MoviesStore';
import MovieActions from '../actions/MovieActions';

export default class FavoriteMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteMovies: MoviesStore.getMovies()
    };
    this._onchange = this._onchange.bind(this);
    this._deleteFavoriteMovie = this._deleteFavoriteMovie.bind(this);
  }

  componentWillMount() {
    MoviesStore.startListening(this._onchange);
  }

  componentWillUnmount() {
    MoviesStore.stopListening(this._onchange);
  }

  _onchange() {
    this.setState({
      favoriteMovies: MoviesStore.getMovies()
    })
  }

  _deleteFavoriteMovie(imdbID, username) {
    MovieActions.removeMovie(imdbID, username);
  }

  render() {
    var {favoriteMovies} = this.state;
    var favoritesBlock;
    if(!favoriteMovies){
      favoritesBlock = <div className="row"></div>
    }else{
      var {favoriteMovie, ownerUsername} = favoriteMovies;
      if(favoriteMovie) {
        favoritesBlock = favoriteMovie.map(fm =>{
          var {Title, Runtime, Actors, Awards, Director, Genre, Plot, Poster, imdbRating, imdbID} = fm;
          return (
            <div className="thumbnail" key={imdbID}>
              <img src={Poster} alt={Title} />
              <div className="caption">
                <h3>{Title}</h3>
                <p>{Runtime}</p>
                <p>{Actors}</p>
                <p>{Awards}</p>
                <p>{Director}</p>
                <p>{Genre}</p>
                <p>{Plot}</p>
                <p>{imdbRating}</p>
                <p>
                  <a className="btn btn-default" role="button" onClick={()=>this._deleteFavoriteMovie(imdbID, ownerUsername)}>Delete</a>
                </p>
              </div>
            </div>
          )
        })
      } else {
        favoritesBlock = <div className="row"></div>;
      }
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            {favoritesBlock}
          </div>
        </div>
      </div>
    )
  }
};
