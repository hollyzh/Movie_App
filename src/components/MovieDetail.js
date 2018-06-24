import React, { Component } from 'react';
import MoviesStore from '../stores/MoviesStore';
import MovieActions from '../actions/MovieActions';


export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      movie: MoviesStore.getOneMovie()
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
      movie: MoviesStore.getOneMovie()
    })
  }

  render() {
    var {movie} = this.state;
    if(!movie){
      return (<div className="row"></div>)
    }else{
      var {Title, Runtime, Actors, Awards, Director, Genre, Plot, Poster, imdbRating, imdbID} = movie;
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
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
                    <a className="btn btn-primary" role="button">Save</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
};
