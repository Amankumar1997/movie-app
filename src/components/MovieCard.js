//import logo from './logo.svg';

import React from "react";
import { addFavourite } from "../actions";
class  MovieCard extends React.Component {


  handleFavouriteClick=()=>{
    const {movie} =this.props;
    // here i will dispatch an action 
    this.props.dispatch(addFavourite(movie))
  }
    
  handleUnFavouriteClick=()=>{
    
  }
  
  
  render(){
//  movie comes from as props
        const{movie ,isFavourite}=this.props
  return (
    <div className="movie-card">
 <div className="left">
<img src={movie.Poster} alt="movie-poster"></img>
 </div>


 <div className="right">
 <div className="title">{movie.Title}</div>
 {/* plot is desc of the movie */}
 <div className="plot">{movie.Plot}</div>
   
    {/* niche footer hai jo imd rating and  and fav buttn*/}
    <div className="footer">
    <div className="rating">{movie.imdbRating}</div>

{
  isFavourite
  ?<button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>Unfavourite</button>
  :<button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
}


</div>
</div>
    </div>
  );
}

}

export default MovieCard;
