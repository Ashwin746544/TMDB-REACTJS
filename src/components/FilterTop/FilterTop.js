import { useEffect, useState } from "react";
import "./FilterTop.css";
const apiKey = "822b48fc66443abd51e7c47769a96310";

const FilterTop = ({ title, categories, cType, isMovieCard, storeCardDataHandler, showFadedContainerHandler }) => {
  console.log(cType);

  const [currentCategory, setCurrentCategory] = useState(0);
  const [previousCategory, setPreviousCategory] = useState(0);
  const [overlayWidth, setOverlayWidth] = useState(0);
  const [transformValue, setTransformValue] = useState(0);

  const getURl = () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    switch (cType) {
      case "popular":
        switch (categories[currentCategory]) {
          case "Streaming":
            break;
          case "On TV":
            url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
            break;
          case "For Rent":
            break;
          case "In Theaters":
            url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
            break;
          default:
            break;
        }
        break;
      case "trending":
        switch (categories[currentCategory]) {
          case "Today":
            url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
            break;
          case "This Week":
            url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
            break;
          default:
            break;
        }
        break;
      case "free":
        switch (categories[currentCategory]) {
          case "Movie":
            url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
            break;
          case "TV":
            url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
            break;
          default:
            break;
        }
        break;
      case "trailers":
        switch (categories[currentCategory]) {
          case "Streaming":
            //do nothing default url
            break;
          case "On TV":
            url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
            break;
          case "For Rent":
            break;
          case "In Theaters":
            url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
    return url;
  }

  useEffect(() => {
    let value = transformValue;
    if (currentCategory > previousCategory) {
      for (let i = previousCategory; i < currentCategory; i++) {
        value += document.querySelector(`.${cType} [data-cat-id = "${i}"]`).getBoundingClientRect().width;
      }
    }
    if (currentCategory < previousCategory) {
      for (let i = previousCategory - 1; i >= currentCategory; i--) {
        value -= document.querySelector(`.${cType} [data-cat-id = "${i}"]`).getBoundingClientRect().width;
      }
    }
    const url = getURl();
    showFadedContainerHandler(true);
    fetch(url).then(
      response => response.json()
    ).then(response => {
      // console.log(response);
      storeCardDataHandler(response.results);
      showFadedContainerHandler(false);
    }
    );

    setTransformValue(value);
    setPreviousCategory(currentCategory);
    setOverlayWidth(document.querySelector(`.${cType} [data-cat-id = "${currentCategory}"]`).getBoundingClientRect().width);
  }, [currentCategory]);


  const categorySelectHandler = (event) => {
    setCurrentCategory(event.target.getAttribute('data-cat-id'));
  }


  const overlayStyle = { width: `${overlayWidth}px`, transform: `translateX(${transformValue}px)` };

  const categoryElements = categories.map(
    (category, index) => {
      return <div
        key={category}
        onClick={categorySelectHandler}
        className={`category-container ${+currentCategory === +index ? "selected" : ""}`}
        style={{ color: !isMovieCard && "white" }}
        data-cat-id={index}>
        {category}
      </div>
    }
  );
  return (
    <div className={`col-12 px-lg-5 d-flex filter-top ${!isMovieCard ? "for_trailer" : ""}`}>
      <div className="row">
        <div className='col-auto'><h4 className='h4' >{title}</h4></div>
        <div className='col-auto'>
          <div className={`categories-container d-flex ${cType}`}>
            {categoryElements}
            <div className="category-overlay" style={overlayStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterTop;