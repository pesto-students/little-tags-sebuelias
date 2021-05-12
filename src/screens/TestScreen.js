// import BestSeller from './BestSeller';
import Carousel from '../components/Carousel';
import CarouselImages from '../assets/sliderImage/CarouselImages';
import Categories from '../components/Categories';

const TestScreen = () => (
  <>
    <div>
      <Carousel slides={CarouselImages} />
      <Categories />
      {/* <div style={{}}>
        <BestSeller />
      </div> */}
    </div>
    {/* <Search /> */}
  </>
);

export default TestScreen;
