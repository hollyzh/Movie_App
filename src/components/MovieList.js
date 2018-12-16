import React, { Component } from 'react';
import MoviesStore from '../stores/MoviesStore';
import MovieActions from '../actions/MovieActions';
import { browserHistory } from 'react-router';
import { Card, Grid, Button, Image, Header } from 'semantic-ui-react';
import { Modal } from 'react-bootstrap';
import MovieDetail from './MovieDetail';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MoviesStore.getMovies()
    };
    this._onchange = this._onchange.bind(this);
    this.handleShow = this.handleShow.bind(this);
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

  handleShow(imdbID, movies) {
    MovieActions.searchOneMovie(imdbID);
    browserHistory.push({pathname: '/movieDetail'});
  }

  render() {
    var {movies} = this.state;
    var row;
    const { open, dimmer } = this.state
    if(movies.Response === "False"){
      row = <div className="row">Can't find Moives!</div>
    }else{
      var moviesList = movies.Search;
      row = moviesList.map(m => {
        var {Title, Year, imdbID, Poster} = m;
        if(Poster == 'N/A') Poster = '../images/movie sample.jpg'
        return(
          <Grid.Column key={imdbID}>
            <Card>
              <Image src={Poster} alt={Title} height='350px'/>
              <Card.Content >
                <Card.Header className='titleSize'>{Title}</Card.Header>
                <Card.Meta>
                  <span className='date'>{Year}</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Button color="purple" className='ui fluid button' onClick={e=>{this.handleShow(imdbID, movies)}}
                  data-target="#theModal" data-toggle="modal">Detail</Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
      })
    }
    return (
      <div className="container movieList">
        <Grid className="movieGrid">
          <Grid.Row columns={4} only="computer">
            {row}
          </Grid.Row>
          <Grid.Row columns={3} only="tablet">
            {row}
          </Grid.Row>
          <Grid.Row columns={1} only="mobile">
            {row}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
};
