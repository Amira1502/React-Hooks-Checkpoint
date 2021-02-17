import {React, useState} from "react";
import FilterByName from "./FilterByName/FilterByName";
import FilterByRating from "./Rating/Rating";
import Footer from "./Footer/Footer";
import {moviesData} from "./MovieData";
import MovieList from "./MovieList/MovieList";

const MovieApp = () => {
    const [movies, setMovies] = useState(moviesData);
    const [inputSearch, setInputSearch] = useState("");
    const [rating, setRating] = useState(1);

    const AddMovie = (newMovie) => {
        setMovies([...movies, newMovie])
      }
       
      return (
        <div className="movieApp">
          <div className="filterPart">
            <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
            <FilterByRating filterRate={true} rating={rating} setRating={setRating} />
          </div>
    
          <MovieList movies={movies} inputSearch={inputSearch} 
          rating={rating} AddMovie={AddMovie} />
    
          <Footer />
        </div>
      )
    }
    
export default MovieApp