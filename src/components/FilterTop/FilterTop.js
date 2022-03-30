import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./FilterTop.css";


const FilterTop = ({ title, categories, cType, isMovieCard }) => {
  console.log(cType);

  const [currentCategory, setCurrentCategory] = useState(0);
  const [previousCategory, setPreviousCategory] = useState(0);
  const [overlayWidth, setOverlayWidth] = useState(0);
  const [transformValue, setTransformValue] = useState(0);

  useEffect(() => {
    if (currentCategory > previousCategory) {
      let value = transformValue;
      for (let i = previousCategory; i < currentCategory; i++) {
        value += document.querySelector(`.${cType} [data-cat-id = "${i}"]`).getBoundingClientRect().width;
      }
      setTransformValue(value);
      setPreviousCategory(currentCategory);
    } else if (currentCategory < previousCategory) {
      console.log("smaller");
      let value = transformValue;
      for (let i = previousCategory - 1; i >= currentCategory; i--) {
        value -= document.querySelector(`.${cType} [data-cat-id = "${i}"]`).getBoundingClientRect().width;
      }
      setTransformValue(value);
      setPreviousCategory(currentCategory);
    } else {
      setTransformValue(0);
    }
    setOverlayWidth(document.querySelector(`.${cType} [data-cat-id = "${currentCategory}"]`).getBoundingClientRect().width);
  }, [currentCategory]);


  const categorySelectHandler = (event) => {
    setCurrentCategory(event.target.getAttribute('data-cat-id'));
  }


  const overlayStyle = { width: `${overlayWidth}px`, transform: `translateX(${transformValue}px)` };

  const categoryElements = categories.map(
    (category, index) => {
      return <div key={category} onClick={categorySelectHandler} className={`category-container ${currentCategory == index ? "selected" : ""}`} style={{ color: !isMovieCard && "white" }} data-cat-id={index}>{category}</div>
    }
  );
  return (
    <div className={`col-12 px-5 d-flex filter-top ${!isMovieCard ? "for_trailer" : ""}`}>
      <div className="row">
        <div className='col-lg-auto'><h4 className='h4' >{title}</h4></div>
        <div className='col-lg-auto'>
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