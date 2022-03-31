import "./MovieCard.css";
import movieImg from '../../assets/movie-img.jpg';
import dotImg from '../../assets/dot.svg';
import ProgressBar from "../ProgressBar/ProgressBar";
import DotIcon from "../DotButton/DotIcon";

const MovieCard = ({ cardData: movieData, totalPopularity }) => {
  const persentage = movieData.vote_average * 10;

  const getFormattedDate = (date) => {
    const newDate = new Date(date).toLocaleDateString("default", { month: "short", day: "numeric", year: "numeric" });
    return newDate;
  }
  return (
    <div className="col-auto">
      <div className="movieCard">
        <div className="movieCard__img-container">
          <img src={"https://image.tmdb.org/t/p/w220_and_h330_face/" + movieData.poster_path} className="movieCard__img" alt="Movie" />
          <DotIcon />
          <div className="progressBar__wrapper">
            <ProgressBar persentage={persentage}></ProgressBar>
          </div>
        </div>
        <div className="movie__info-container mt-4 mb-2">
          {/* here we conditionaly set original_name for TV show and title for Movie  */}
          <p className="movie__name">{movieData.original_name ? movieData.original_name : movieData.title}</p>
          <p className="movie__date">{getFormattedDate(movieData.first_air_date ? movieData.first_air_date : movieData.release_date)}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;