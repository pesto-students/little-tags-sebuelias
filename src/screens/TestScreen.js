// import BestSeller from './BestSeller';
import Carousel from '../components/Carousel';
import CarouselImages from '../assets/sliderImage/CarouselImages';
import Categories from '../components/Categories';

// console.log(CarouselImages);
// console.log(typeof CarouselImages);

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
