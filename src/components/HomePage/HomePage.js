import Navigation from '../navigation/navigation';
import Header from '../Header/header';
import Filter from '../filter/filter';

const HomePage = () => {
  const popularCategories = ["Streaming", "On TV", "For Rent", "In Theaters"];
  const trailersCategories = ["Streaming", "On TV", "For Rent", "In Theaters"];
  const freeCategories = ["Movies", "TV"];
  const trendingCategories = ["Today", "This Week"];
  return (<>
    <Navigation />
    <Header />
    <Filter cType="popular" title="What's Popular" categories={popularCategories} isMovieCard={true} />
    <Filter cType="free" title="Free To Watch" categories={freeCategories} isMovieCard={true} />
    <Filter cType="trailers" title="Latest Trailers" categories={trailersCategories} isMovieCard={false} />
    <Filter cType="trending" title="Trending" categories={trendingCategories} isMovieCard={true} />
  </>);
}

export default HomePage;