import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PastOrder = (props) => {
    const test = new Date(props.apparrelData.order[0].orderDate)
console.log(props, "aaaaaaaaaaaaaaaaaaaaaaaa", props.apparrelData, test)
return(
    <>
    <div style={{ height: '100px' }} />
    <div className="flex-column">
        <div className="flex-row">
            <div>
                order date: {test.getDay()} {test.getMonth()}
            </div>
            <div>
                payment id
            </div>
            </div>
            <div>
                our body
            </div>
            <div>
                address man 
            </div>
    </div>
    </>
)
}

PastOrder.propTypes = {
    // requestData: PropTypes.func.isRequired,
    // QueryCategory: PropTypes.string.isRequired,
    // changeSignUpBool: PropTypes.func.isRequired,
    // location: PropTypes.objectOf(PropTypes.object).isRequired,
    // history: PropTypes.objectOf(PropTypes.object).isRequired,
    apparrelData: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
// const dispatchToProps = { requestData, changeSignUpBool };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default connect(mapStateToProps)(PastOrder);
