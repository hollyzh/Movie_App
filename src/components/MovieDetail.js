import React, { Component } from 'react';
import MoviesStore from '../stores/MoviesStore';
import { Modal } from 'react-bootstrap';
// import MovieActions from '../actions/MovieActions';


export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  // saveOneMovie(movie, username){
  //   MovieActions.saveMovie(movie, username);
  // }

  render() {
    var {movie} = this.state;
    if(!movie){
      return (<div className="row"></div>)
    }else{
      var {Title, Runtime, Actors, Awards, Director, Genre, Plot, Poster, imdbRating, imdbID} = movie;
      return (
        <div className="container modalStyle">
          <Modal.Header key={imdbID} closeButton>
            <Modal.Title>{Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="contentDetail">
            <img src={Poster} alt={Title} />
            <p>{Runtime}</p>
            <p>{Actors}</p>
            <p>{Awards}</p>
            <p>{Director}</p>
            <p>{Genre}</p>
            <p>{Plot}</p>
            <p>{imdbRating}</p>
          </Modal.Body>
        </div>
      )
    }
  }
};
