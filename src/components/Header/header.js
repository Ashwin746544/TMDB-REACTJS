import { Container } from 'react-bootstrap';
import './header.css';

const Header = () => {
  return (
    <header className='container'>
      <div className='row'>
        <div className='col-12 mt-5 mb-4 px-2 px-sm-5'>
          <h1 className='h1'>Welcome</h1>
          <h2 className='h2'>Millions of movies, TV shows and people to discover. Explore now.</h2>
        </div>
        <div className='col-12 mt-5 mb-4 px-2 px-sm-5'>
          <form className='input-container'>
            <input type="search" name='search' placeholder='Search for a movie,tv show,person.....' />
            <button className='search-container'><span>Search</span></button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;