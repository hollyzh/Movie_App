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
                <a href="#" className="btn btn-primary" role="button">Button</a>
                <a href="#" className="btn btn-default" role="button">Button</a>
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
