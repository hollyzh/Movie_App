import React, { Component } from 'react';
import MoviesStore from '../stores/MoviesStore';
import MovieActions from '../actions/MovieActions';


export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   movies: MoviesStore.getMovies()
    // };
    // this._onchange = this._onchange.bind(this);
    // this._movieDetial = this._movieDetial.bind(this);
  }

  // componentWillMount() {
  //   MoviesStore.startListening(this._onchange);
  // }
  //
  // componentWillUnmount() {
  //   MoviesStore.stopListening(this._onchange);
  // }
  //
  // _onchange() {
  //   this.setState({
  //     movies: MoviesStore.getMovies()
  //   })
  // }
  //
  // _movieDetial(imdbID){
  //   MovieActions.searchOneMovie(imdbID);
  // }

  render() {
    // var {movies} = this.state;
    // var row;
    // if(!movies){
    //   row = <div className="row"></div>
    // }else{
    //   var moviesList = movies.Search;
    //   row = moviesList.map(m => {
    //     var {Title, Year, imdbID, Poster} = m;
    //     return(
    //       <div className="thumbnail" key={imdbID}>
    //         <img src={Poster} alt={Title} />
    //         <div className="caption">
    //           <h3>{Title}</h3>
    //           <p>{Year}</p>
    //           <p>
    //             <a onClick={e=>this._movieDetial(imdbID)} className="btn btn-primary" role="button">Detail</a>
    //           </p>
    //         </div>
    //       </div>
    //     )
    //   })
    // }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            Detail
          </div>
        </div>
      </div>
    )
  }
};
