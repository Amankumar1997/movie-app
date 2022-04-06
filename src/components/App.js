//import logo from './logo.svg';
import './App.css';
//  we grab the data from data.js
 import {data} from'../data';
//  import navbar and movie card
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import {addMovies} from '../actions'

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


  render(){
     // here we get the state from store using props
  const movies=this.props.store.getState();
  return (
    <div className="App" >
   <Navbar/>

     <div className='main'>
    <div className='tabs'>
    <div className='tab'>Movies</div>
    <div className='tab'>Favourtes</div>
    </div>
    </div>



    <div className='list'>
{/*  grab data and itrate using ma */}
   {movies.map((movie,index)  =>(
     <MovieCard movie={movie} key={`movies-${index}`} />
   ))}

    </div>
    </div>
   );
   }
}

export default App;
