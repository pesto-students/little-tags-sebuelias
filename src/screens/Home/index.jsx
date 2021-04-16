// import BestSeller from './BestSeller';
import Carousel from '../../components/Carousel';
import CarouselImages from '../../assets/sliderImage/CarouselImages';
import Categories from '../../components/Categories';
import './index.scss';
// console.log(CarouselImages);
// console.log(typeof CarouselImages);

const Home = () => (
  <div className="home-container">
    <Carousel slides={CarouselImages} />
    <Categories />
  </div>
);

export default Home;
