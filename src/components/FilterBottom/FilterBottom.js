import MovieCard from "../MovieCard/MovieCard";
import TrailerCard from '../TrailerCard/TrailerCard';
import "./FilterBottom.css";
const FilterBottom = ({ isMovieCard, cardDataArray, cType }) => {


  const scrollHandler = (event) => {
    console.log("scroll object", event.target.scrollLeft);
    if (event.target.scrollLeft > 30) {
      document.querySelector(`.filter-bottom__wrapper-${cType}`).classList.add("filter-bottom__wrapper-gt30");
      console.log("inside > 30")
    }
    if (event.target.scrollLeft == 0) {
      document.querySelector(`.filter-bottom__wrapper-${cType}`).classList.remove("filter-bottom__wrapper-gt30");
      console.log("inside 0")
    }
  }

  const getFormattedDate = (date) => {
    const newDate = new Date(date).toLocaleDateString("default", { month: "short", day: "numeric", year: "numeric" });
    return newDate;
  }

  let content = null;
  if (isMovieCard) {
    content = cardDataArray.map((cardData, index) => <MovieCard key={index} cardData={cardData} getFormattedDate={getFormattedDate} />);
  } else {
    content = cardDataArray.map((cardData, index) => <TrailerCard key={index} cardData={cardData} getFormattedDate={getFormattedDate} />);
  }
  return (
    <div className="col-12 ps-5 mt-3 filter-bottom" onScroll={scrollHandler}>
      <div className="row flex-nowrap movieCards__container" style={isMovieCard ? { minHeight: "398px" } : {}}>
        {content}
      </div>
    </div>
  );
}

export default FilterBottom;