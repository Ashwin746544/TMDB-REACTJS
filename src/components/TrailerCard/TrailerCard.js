import DotIcon from "../DotButton/DotIcon";
import PlayIcon from '../../assets/play.svg';
import './TrailerCard.css';
import TrailerModal from "../TrailerModal/TrailerModal";
import { useState } from 'react';

const apiKey = "822b48fc66443abd51e7c47769a96310";

const TrailerCard = ({ cardData: movieData, getFormattedDate }) => {

  const [trailerYtKey, setTrailerYtKey] = useState(null);
  const [trailerName, setTrailerName] = useState("");

  const openTrailerHandler = (MovieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${MovieId}/videos?api_key=${apiKey}&language=en-US`).then(
      response => response.json()
    ).then(response => {
      console.log(response);
      const trailer = response.results.find(video => video.type = "oficial Trailer");
      console.log(trailer);
      document.body.style.overflow = "hidden";
      setTrailerYtKey(trailer.key);
      setTrailerName(trailer.name);
    });
  }

  const closeModalHandler = () => {
    document.body.style.overflow = "auto";
    setTrailerYtKey(null);
  }

  return (
    <>
      {trailerYtKey && <TrailerModal ytKey={trailerYtKey} trailerName={trailerName} closeModalHandler={closeModalHandler} />}
      <div className="col-auto fixed-minSize">
        <div className="trailerCard">
          <div className="trailerCard__img-container" onClick={() => openTrailerHandler(movieData.id)}>
            <img src={"https://image.tmdb.org/t/p/w220_and_h330_face/" + movieData.poster_path} className="trailerCard__img" alt="Movie" />
            <DotIcon />
            <img src={PlayIcon} className="playIcon" alt="play" title="Play" />
          </div>
          <div className="trailer__info-container mt-1 mb-5">
            <p className="trailer__name">{movieData.original_name ? movieData.original_name : movieData.title}</p>
            <p className="trailer__season">{getFormattedDate(movieData.first_air_date ? movieData.first_air_date : movieData.release_date)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrailerCard;