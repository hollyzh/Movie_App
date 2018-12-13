import React, { Component } from 'react';
import MoviesStore from '../stores/MoviesStore';
import MovieActions from '../actions/MovieActions';
import { Card, Grid, Button, Image, Header } from 'semantic-ui-react';

export default class FavoriteMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteMovies: MoviesStore.getFavoriteMovies()
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
      favoriteMovies: MoviesStore.getFavoriteMovies()
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
          var {Title, Runtime, Actors, Genre, imdbID, Year, Poster} = fm;
          return (
            <Grid.Column key={imdbID} className="favoriteMovieStyle">
              <Card className="card">
                <Image src={Poster} alt={Title} height='350px'/>
                <Card.Content >
                  <Card.Header className='titleSize'>{Title} / <span>{Year}</span></Card.Header>
                  <Card.Meta>
                    <p className='date'>Runtime: {Runtime}</p>
                    <p className='date'>Actors: {Actors}</p>
                    <p className='date'>Genre: {Genre}</p>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Button color="teal" className='ui fluid button'
                    onClick={()=>this._deleteFavoriteMovie(imdbID, ownerUsername)}>Delete</Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })
      } else {
        favoritesBlock = <div className="row"></div>;
      }
    }
    return(
      <div className="container favoriteMovieList">
        <Grid className="movieGrid">
          <Grid.Row columns={4} only="computer">
            {favoritesBlock}
          </Grid.Row>
          <Grid.Row columns={3} only="tablet">
            {favoritesBlock}
          </Grid.Row>
          <Grid.Row columns={1} only="mobile">
            {favoritesBlock}
          </Grid.Row>
        </Grid>
      </div>


    )
  }
};
