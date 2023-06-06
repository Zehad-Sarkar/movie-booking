import { useParams } from "react-router-dom";
import "./MovieForm.css";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movie);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <span>Loading...</span>;
  }

  const handleSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const movieName = form.movieName.value;
    const movieType = form.movieType.value;
    const runtime = form.runtime.value;
    // console.log("abc", userName, email, movieName, movieType, runtime);
    const ticket = {
      userName,
      email,
      movieName,
      movieType,
      runtime,
      bookedId: movie.id,
    };
    console.log(ticket);
    const bookings = JSON.stringify(ticket);
    localStorage.setItem("booked-ticket", bookings);
  };
  return (
    <form onSubmit={handleSave} className="movie-form">
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName"  required/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required/>
      </div>
      <div className="form-group">
        <label htmlFor="movieName">Movie Name</label>
        <input type="text" name="movieName" defaultValue={movie.name} />
      </div>
      <div className="form-group">
        <label htmlFor="movieType">Movie Type</label>
        <input type="text" name="movieType" defaultValue={movie?.type} />
      </div>
      <div className="form-group">
        <label htmlFor="runtime">Runtime</label>
        <input type="text" name="runtime" defaultValue={movie.runtime} />
      </div>

      <button className="submit-button" type="submit">
        Confirm Booking
      </button>
    </form>
  );
};

export default MovieDetails;
