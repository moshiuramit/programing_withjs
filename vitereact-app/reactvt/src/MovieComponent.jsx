import { movies } from './data/movies';
import Movie from './Movie';

const fetchMovieData = () => {
  return movies;
}
const MovieComponent = () => {
  const movieData = fetchMovieData();
  return (
    <div className='movie-container'>
      <h1 className='text-3xl font-bold'> Movies </h1>  
      <div className=''>
        <ul className='movie-list flex flex-row flex-wrap'>
          {
            movieData.map( (movie) => (
              <Movie key={movie.imdbID} movie={movie} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default MovieComponent