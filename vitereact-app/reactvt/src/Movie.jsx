
const Movie = ({movie}) => {
  return (
      <li className='movie ' key={movie.imdbID}>
        <div className="max-w-sm m-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className='w-96 h-104 overflow-hidden block'>
                <img className="w-80 h-104 mx-auto size-auto object-fill" src={movie.Poster} alt={movie.Title} />
            </a>
            <div className="p-5">
                <a className="" href="#">
                    <h5 className="mb-2 h-14 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.Title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {movie.Title} by {movie.Director} was released on {movie.Year}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" >Rating: {movie.imdbRating}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>              
      </li>
  )
}

export default Movie;