import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ViewDetails.css";

const ViewDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <div className="card">
        <img src={movie?.image?.original} alt="" className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">Movie Name: {movie?.name}</h2>
          <div className="card-text">
            <p>Summary: {movie?.summary}</p>
            <p>Id: {movie?.id}</p>
            <p>Language: {movie?.language}</p>
            <p>Status: {movie?.status}</p>
            <p>Type: {movie?.type}</p>
            <p>Runtime: {movie?.runtime}</p>
            <div>
              <p className="">Genres:</p>
              {movie?.genres.map((genre, i) => (
                <p key={i}>{genre}</p>
              ))}
            </div>
            <p className="mt-4 fs-2">Rating: {movie?.rating?.average}</p>
          </div>
          <Link to={`/form/${movie.id}`}>
            <button className="btn btn-primary mt-4">Booking Ticket</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
