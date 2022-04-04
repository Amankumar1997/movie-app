//import logo from './logo.svg';
import './App.css';
//  we grab the data from data.js
import {data} from'../data';
//  import navbar and movie card
import Navbar from './Navbar';
import MovieCard from './MovieCard';

function App() {
  return (
    <div className="App">
   <Navbar/>

     <div className='main'>
    <div className='tabs'>
    <div className='tab'>Movies</div>
    <div className='tab'>Favourtes</div>
    </div>
    </div>



    <div className='list'>
{/*  grab data and itrate using ma */}
   {data.map((movie,index)  =>(
     <MovieCard movie={movie} key={`movies-${index}`} />
   ))}

    </div>
    </div>



   
  );
}

export default App;
