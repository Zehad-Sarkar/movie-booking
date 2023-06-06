import { Link } from "react-router-dom";
import "./Movie.css";
const AllMovies = ({ movie }) => {
  // console.log(movie.show?.id);

  return (
    <div className="movie-card">
      <div>
        <img src={movie?.show?.image?.medium} alt="" />
      </div>
      <h2>Movie Name: {movie?.show?.name}</h2>
      <h2>Language: {movie?.show?.language}</h2>
      <h2 className="movie-genres">
        Genres:
        {movie?.show?.genres.map((types, i) => (
          <p key={i}>{types}</p>
        ))}
      </h2>
      <Link to={`/details/${movie.show?.id}`}>
        <button className="btn">View Details</button>
      </Link>
    </div>
  );
};

export default AllMovies;
