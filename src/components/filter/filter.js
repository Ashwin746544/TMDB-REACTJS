import { useState } from 'react';
import FilterBottom from '../FilterBottom/FilterBottom';
import FilterTop from '../FilterTop/FilterTop';
import './filter.css';
import trailerBg from '../../assets/trailer_filter-background.jpg';

const Filter = ({ categories, cType, title, isMovieCard }) => {

  const [cardDataArray, setCardDataArray] = useState([]);

  const storeCardDataHandler = (cardDataArray) => {
    setCardDataArray(cardDataArray);
  }
  return (
    <div className={`container filter mt-5 ${!isMovieCard ? "trailer_bg" : (cType === "trending" ? "trending_bg" : "")}`}>
      <div className='row'>
        <FilterTop cType={cType} title={title} categories={categories} isMovieCard={isMovieCard} storeCardDataHandler={storeCardDataHandler} />
        <FilterBottom isMovieCard={isMovieCard} cardDataArray={cardDataArray} />
      </div>
      {!isMovieCard && <><img className='bg' src={trailerBg} alt="fdfsdf" /><div className='backdrop'></div></>}
    </div>
  );
}

export default Filter;