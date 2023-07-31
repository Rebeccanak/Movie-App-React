import logo from './logo.svg';
import React from 'react';
import GetMovies from './components/getmovies';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MovieDetails from './MovieDetails/MovieDetails';
import NavigationBar from './NavigationBar/index.jsx';



function App() {
  return (
    
    <Router>
    <NavigationBar />
    <GetMovies/>
    
    <Routes>
    
      <Route path="/" element={<GetMovies />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  </Router>
    
  );
}

export default App;
