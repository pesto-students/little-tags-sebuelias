import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CarouselImages from '../../assets/sliderImage/CarouselImages';
import Crousel from "../../components/Carousel/Crousel"
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
        <Crousel slides={CarouselImages} {...props} />
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
