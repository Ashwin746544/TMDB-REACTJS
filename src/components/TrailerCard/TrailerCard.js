import DotIcon from "../DotButton/DotIcon";
import TrailerImg from '../../assets/trailer.jpg';
import PlayIcon from '../../assets/play.svg';
import './TrailerCard.css';

const TrailerCard = ({ cardData: movieData }) => {

  return (
    <div className="col-auto">
      <div className="trailerCard">
        <div className="trailerCard__img-container">
          <img src={"https://image.tmdb.org/t/p/w220_and_h330_face/" + movieData.poster_path} className="trailerCard__img" alt="Movie" />
          <DotIcon />
          <img src={PlayIcon} className="playIcon" alt="play" title="Play" />
        </div>
        <div className="trailer__info-container mt-1 mb-5">
          <p className="trailer__name">{movieData.title}</p>
          <p className="trailer__season">{movieData.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default TrailerCard;