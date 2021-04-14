import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "./index.sass"
import { requestData } from '../../store/modules/apparrelData/actions';

function BestSellar(props) {
  
  const [bestSellarApparel, setbestSellarApparel] = useState([])
    
  useEffect(() => {
    props.requestData();
  }, []);

  useEffect(() => {
      setbestSellarApparel(props.apparrelData)
  }, [props])

  const visualizeBestSellarBox = (bestSellarApparel || []).map((value, index) =>(
    <div className="individual-content-box" key={index.toString()}>
    <img className="image-box" src={value.image} alt="test" />
    </div>
  ))

  return (
    <>
       <h1 className="best-sellar-title">BEST SELLAR</h1>
      <div className="complete-data">
          {visualizeBestSellarBox}
      </div>
    </>
  );
}

BestSellar.propTypes = {
  requestData: PropTypes.func.isRequired,
  apparrelData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData.apparrelData,
});

const dispatchToProps = { requestData };

export default connect(mapStateToProps, dispatchToProps)(BestSellar);
