import FilterTop from '../FilterTop/FilterTop';
import './filter.css';

const Filter = () => {
  const categories = ["Streaming", "On TV", "For Rent", "In Theaters"];
  return (
    <div className='container filter mt-3'>
      <div className='row'>
        <FilterTop title="What's Popular" categories={categories} />
      </div>
    </div>
  );
}

export default Filter;