import { useState } from 'react';
import FilterBottom from '../FilterBottom/FilterBottom';
import FilterTop from '../FilterTop/FilterTop';
import './filter.css';
import trailerBg from '../../assets/trailer_filter-background.jpg';

const Filter = ({ categories, cType, title, isMovieCard }) => {

  const [cardDataArray, setCardDataArray] = useState([]);
  const [showFadedContainer, setShowFadedContainer] = useState(false);


  const showFadedContainerHandler = (value) => {
    setShowFadedContainer(value);
  }

  const storeCardDataHandler = (cardDataArray) => {
    setCardDataArray(cardDataArray);
  }
  let content = <FilterBottom isMovieCard={isMovieCard} cardDataArray={cardDataArray} cType={cType} />;
  if (showFadedContainer) {
    if (isMovieCard) {
      content = <div className='faded-container col-12' style={{ zIndex: 1, height: "425px" }}></div>;
    } else {
      content = <div className='faded-container col-12' style={{ zIndex: 1, height: "320px", backgroundImage: "rgba(3, 37, 65, 0.75) 0%)" }}></div>;
    }
  }
  return (
    <div className={`container filter mt-5 ${!isMovieCard ? "trailer_bg" : (cType === "trending" ? "trending_bg" : "")}`}>
      <div className={`row filter-bottom__wrapper filter-bottom__wrapper-${cType}`}>
        <FilterTop cType={cType} title={title} categories={categories} isMovieCard={isMovieCard} storeCardDataHandler={storeCardDataHandler} showFadedContainerHandler={showFadedContainerHandler} />
        {content}
      </div>
      {!isMovieCard && <><img className='bg' src={trailerBg} alt="fdfsdf" /><div className='backdrop'></div></>}
    </div>
  );
}

export default Filter;