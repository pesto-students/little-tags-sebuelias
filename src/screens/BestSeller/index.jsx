import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.sass';
import { requestData } from '../../store/modules/apparrelData/actions';

function BestSeller(props) {
  const [bestSellerApparel, setbestSellerApparel] = useState([]);

  useEffect(() => {
    props.requestData();
  }, []);

  useEffect(() => {
    setbestSellerApparel(props.apparrelData);
  }, [props]);

  const visualizeBestSellerBox = (bestSellerApparel || []).map(
    (value, index) => (
      <div className="individual-content-box" key={index.toString()}>
        <img className="image-box" src={value.image} alt="test" />
      </div>
    )
  );

  return (
    <>
      <h1 className="best-Seller-title">BEST Seller</h1>
      <div className="complete-data">{visualizeBestSellerBox}</div>
    </>
  );
}

BestSeller.propTypes = {
  requestData: PropTypes.func.isRequired,
  apparrelData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData.apparrelData,
});

const dispatchToProps = { requestData };

export default connect(mapStateToProps, dispatchToProps)(BestSeller);
