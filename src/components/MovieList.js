import React, { Component } from 'react';
import MoviesStore from '../stores/MoviesStore';
import MovieActions from '../actions/MovieActions';
import { browserHistory } from 'react-router';



export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MoviesStore.getMovies()
    };
    this._onchange = this._onchange.bind(this);
    this.getDetail = this.getDetail.bind(this);
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

  getDetail(imdbID) {
    MovieActions.searchOneMovie(imdbID);
    browserHistory.push({pathname: '/movieDetail'});
  }

  render() {
    var {movies} = this.state;
    var row;
    if(!movies){
      row = <div className="row"></div>
    }else{
      var moviesList = movies.Search;
      row = moviesList.map(m => {
        var {Title, Year, imdbID, Poster} = m;
        return(
          <div className="thumbnail" key={imdbID}>
            <img src={Poster} alt={Title} />
            <div className="caption">
              <h3>{Title}</h3>
              <p>{Year}</p>
              <p>
                <a onClick={e=>{this.getDetail(imdbID)}}
                  className="btn btn-primary"
                  role="button"
                >Detail</a>
              </p>
            </div>
          </div>
        )
      })
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            {row}
          </div>
        </div>
      </div>
    )
  }
};
