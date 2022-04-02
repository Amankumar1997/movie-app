//import logo from './logo.svg';

import React from "react";
class  MovieCard extends React.Component {


    render(){
//  movie comes from as props
        const{movie}=this.props
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
    
    <div className="rating">{movie.imdbRating}</div>
<button className="favourate-btn">Favourate</button>
</div>
    </div>
  );
}

}

export default MovieCard;
