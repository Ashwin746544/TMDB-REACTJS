import DotIcon from "../DotButton/DotIcon";
import TrailerImg from '../../assets/trailer.jpg';
import './TrailerCard.css';

const TrailerCard = () => {

  return (
    <div className="col-auto">
      <div className="trailerCard">
        <div className="trailerCard__img-container">
          <img src={TrailerImg} className="trailerCard__img" alt="Movie" />
          <DotIcon />
        </div>
        <div className="trailer__info-container mt-1 mb-5">
          <p className="trailer__name">Outlander</p>
          <p className="trailer__season">Ep. 5 Preview</p>
        </div>
      </div>
    </div>
  );
}

export default TrailerCard;