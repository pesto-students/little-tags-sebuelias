import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from '../../components/Carousel';
import CarouselImages from '../../assets/sliderImage/CarouselImages';
import Categories from '../../components/Categories';
import { requestData } from '../../store/modules/apparrelData/actions';
import './index.scss';
// console.log(CarouselImages);
// console.log(typeof CarouselImages);

const Home = (props) => {

  useEffect(() => {
    props.requestData();
  }, []);

  return (<>
    <div className="home-container">
      <Carousel slides={CarouselImages} {...props}/>
      <Categories {...props}/>
      {/* <div style={{}}>
        <BestSeller />
      </div> */}
    </div>
    {/* <Search /> */}
  </>)
};

Home.propTypes = {
  requestData: PropTypes.func.isRequired,
};

const dispatchToProps = { requestData };

export default connect(null, dispatchToProps)(Home);

