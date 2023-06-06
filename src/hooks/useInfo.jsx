import { useEffect, useState } from "react";

const useInfo = () => {
  const [movies, setMovies] = useState([]);

  const url = "https://api.tvmaze.com/search/shows?q=all";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return [movies];
};

export default useInfo;
