import MovieCard from "../MovieCard/MovieCard";
import TrailerCard from '../TrailerCard/TrailerCard';
import "./FilterBottom.css";

const FilterBottom = ({ isMovieCard, cardDataArray }) => {
  // const totalPopularity = cardDataArray.reduce((total, movie) => total + movie.popularity, 0);
  const totalPopularity = cardDataArray.reduce((total, movie) => movie.popularity > total ? movie.popularity : total, 0);
  // console.log(totalPopularity);

  let content = null;
  if (isMovieCard) {
    content = cardDataArray.map((cardData, index) => <MovieCard key={index} cardData={cardData} totalPopularity={totalPopularity} />);
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