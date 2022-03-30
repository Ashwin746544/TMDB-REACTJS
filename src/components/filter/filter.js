import FilterBottom from '../FilterBottom/FilterBottom';
import FilterTop from '../FilterTop/FilterTop';
import './filter.css';

const Filter = ({ categories, cType, title, isMovieCard }) => {
  return (
    <div className={`container filter mt-5 ${!isMovieCard ? "trailer_bg" : ""}`}>
      <div className='row'>
        <FilterTop cType={cType} title={title} categories={categories} isMovieCard={isMovieCard} />
        <FilterBottom isMovieCard={isMovieCard} />
      </div>
    </div>
  );
}

export default Filter;