import MovieCard from "../MovieCard/MovieCard";
import TrailerCard from '../TrailerCard/TrailerCard';
import "./FilterBottom.css";

const FilterBottom = ({ isMovieCard }) => {
  const cardDataArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  let content = null;
  if (isMovieCard) {
    content = cardDataArray.map((cardData, index) => <MovieCard key={index} cardData={cardData} />);
  } else {
    content = cardDataArray.map((cardData, index) => <TrailerCard key={index} cardData={cardData} />);
  }
  return (
    <div className="col-12 ps-5 mt-3 filter-bottom">
      <div className="row flex-nowrap movieCards__container">
        {content}
      </div>
    </div>
  );
}

export default FilterBottom;