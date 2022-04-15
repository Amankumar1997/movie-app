//import logo from './logo.svg';
import './App.css';
//  we grab the data from data.js
 import {data} from'../data';
//  import navbar and movie card
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import {addMovies, setShowFavourites} from '../actions'

class  App extends React.Component {

 
// we make fuction componet did mout for api call
componentDidMount()
{
//  destructring 
  const { store} =this.props;

  store.subscribe(()=>{
    console.log('updated')
    this.forceUpdate();
  })
  //make api call here
  //we dispatch the action
  // store.dispatch({
  //   //  herewe want to add movie action
  //   type:'ADD_MOVIES',
  //   movies:data
  // })
store.dispatch(addMovies(data))
  console.log(this.props.store.getState());
}




// this function is just check movie  is favorite list or not
isMovieFavourite=(movie)=>{
// now i dstuctring fav from my curent state
const {favourates} =this.props.store.getState();

const index=favourates.indexOf(movie);// it will return the index of movie if it is in fav list else it return -1 
//  if movie is present
if(index!==-1)
{// found the movie
  return true
}
  return false;


}



onChangeTab=(val)=>{
// this function dispatch an action or action hmara setShow fav 
this.props.store.dispatch(setShowFavourites(val))

}

  render(){
     // here we get the state from store using props
  const {list,favourates,showFavourites}=this.props.store.getState();
  console.log('Render',this.props.store.getState())
  // show favroutes true hai to favlist dikayenge other wise list of movies
  const  displayMovies=showFavourites?favourates:list;
  
  return (
    <div className="App" >
   <Navbar/>

     <div className='main'>
    <div className='tabs'>
    <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
    <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Favourtes</div>
    </div>
   



    <div className='list'>
{/*  grab data and itrate using ma */}
   {displayMovies.map((movie,index)  =>(
     <MovieCard movie={movie}
      key={`movies-${index}`}
      dispatch={this.props.store.dispatch}
      isFavourite={this.isMovieFavourite(movie)}
      />
   ))}
    </div>
{displayMovies.length===0?<div className='no-movies'> No movie to display</div> :null}
    </div>
    </div>
   );
   }
}

export default App;
