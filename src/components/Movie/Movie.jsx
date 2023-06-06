import AllMovies from "./AllMovies";
import "../Movie/Movie.css";
import useInfo from "../../hooks/useInfo";

const Movie = () => {
  const [movies] = useInfo();

  return (
    <>
      <h1 className="wellcome">Wellcome to visit our site. Booking your favorite Movie</h1>
      <div className="movies-card">
        {movies.map((movie, i) => (
          <AllMovies key={i} movie={movie}></AllMovies>
        ))}
      </div>
    </>
  );
};

export default Movie;
