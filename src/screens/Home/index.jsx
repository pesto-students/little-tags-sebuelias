import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from '../../components/Carousel';
import CarouselImages from '../../assets/sliderImage/CarouselImages';
import Categories from '../../components/Categories';
import { requestData } from '../../store/modules/apparrelData/actions';
import './index.scss';

const Home = (props) => {
  useEffect(() => {
    props.requestData();
  }, []);

  return (
    <>
      <div className="home-container">
        <Carousel slides={CarouselImages} timer={3000} {...props} />
        <h2 className="category">Categories</h2>
        <Categories {...props} />
      </div>
    </>
  );
};

Home.propTypes = {
  requestData: PropTypes.func.isRequired,
};

const dispatchToProps = { requestData };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  auth: state.authDetails,
});

export default connect(mapStateToProps, dispatchToProps)(Home);
