import { useEffect, useState } from "react";
import "./FilterTop.css";


const FilterTop = ({ title, categories }) => {

  const [currentCategory, setCurrentCategory] = useState(0);
  const [previousCategory, setPreviousCategory] = useState(0);
  const [overlayWidth, setOverlayWidth] = useState(0);
  // let overlayWidth = 0;
  useEffect(() => {
    setOverlayWidth(document.querySelector(`[data-cat-id = "${currentCategory}"]`).getBoundingClientRect().width);
    console.log("width is::" + overlayWidth);
  })
  const categoryElements = categories.map(
    (category, index) => {
      return <div key={category} className="category-container" data-cat-id={index}>{category}</div>
    }
  );
  console.log(overlayWidth);
  const overlayStyle = { width: `${overlayWidth}px` };
  console.log(overlayStyle);
  return (
    <div className='col-12 px-5 d-flex filter-top'>
      <div className="row">
        <div className='col-lg-auto'><h4 className='h4'>{title}</h4></div>
        <div className='col-lg-auto'>
          <div className="categories-container d-flex">
            {categoryElements}
            <div className="category-overlay" style={overlayStyle}>overlay</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterTop;