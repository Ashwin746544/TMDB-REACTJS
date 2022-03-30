import "./MovieCard.css";
import movieImg from '../../assets/movie-img.jpg';
import dotImg from '../../assets/dot.svg';
import ProgressBar from "../ProgressBar/ProgressBar";
import DotIcon from "../DotButton/DotIcon";

const MovieCard = () => {
  const persentage = 66;
  return (
    <div className="col-auto">
      <div className="movieCard">
        <div className="movieCard__img-container">
          <img src={movieImg} className="movieCard__img" alt="Movie" />
          <DotIcon />
          <div className="progressBar__wrapper">
            <ProgressBar persentage={persentage}></ProgressBar>
          </div>
        </div>
        <div className="movie__info-container mt-4 mb-2">
          <p className="movie__name">Pasión de gavilanes</p>
          <p className="movie__date">Oct 21, 2003</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;