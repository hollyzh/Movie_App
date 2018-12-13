import React, { Component } from 'react';
import MoviesStore from '../stores/MoviesStore';
import UserStore from '../stores/UserStore';
import { Modal, Button } from 'react-bootstrap';
import MovieActions from '../actions/MovieActions';
import { browserHistory } from 'react-router';


export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      movie: MoviesStore.getOneMovie(),
      user: UserStore.getUser()
    };
    this.handleClose = this.handleClose.bind(this);
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

  handleClose() {
    this.setState({ show: false });
    browserHistory.push({pathname: '/movies'});
  }

  saveOneMovie(movie, username){
    MovieActions.saveMovie(movie, username);
    this.handleClose();
  }

  render() {
    var {movie} = this.state;
    var {user} = this.state;
    if(!movie){
      return (<div className="row"></div>)
    }else{
      var {Title, Runtime, Actors, Awards, Director, Genre, Plot, Poster, imdbRating, imdbID} = movie;
      return (
          <Modal id="theModal" className= "modalStyle" show={this.state.show} onHide={this.handleClose}>
            <Modal.Header key={imdbID} closeButton>
              <Modal.Title>{Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="contentDetail">
              <img src={Poster} alt={Title} />
              <p><span>Runtime: </span>{Runtime}</p>
              <p><span>Actors: </span>{Actors}</p>
              <p><span>Awards: </span>{Awards}</p>
              <p><span>Director: </span>{Director}</p>
              <p><span>Genre: </span>{Genre}</p>
              <p><span>Plot: </span>{Plot}</p>
              <p><span>Rate: </span>{imdbRating}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="danger" onClick={e=>this.saveOneMovie(movie, user.username)}>Save</Button>
              <Button bsStyle="info" onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
      )
    }
  }
};
