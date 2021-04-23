import { useState } from "react"
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import { hitCartAddRemove, hitWhislist } from "../../store/modules/apparrelData/actions"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Card from '../../components/Card';
import "./index.scss"

const Whislist = (props) => {
    const [openSignUpModal, setopenSignUpModal] = useState(false)

    const visulizeWhislist = (props.apparrelData.whisList || []).map((value, index) => (
        <Card index={index} value={value} key={index.toString()} {...props} openSignUpModal={()=>setopenSignUpModal(true)}/>
    ))

    return (
        <>
        <Header openSignUpModal={openSignUpModal} closeSignUpModal={()=>setopenSignUpModal(false)} {...props}/>
        <div style={{height:"100px"}}/>
        <h1 className="best-sellar-title">My Whislist</h1>
        {visulizeWhislist.length ? <div className="complete-data">
          {visulizeWhislist}
      </div>: <div>
        <h2>Oops! No item in whislist</h2>
        </div>
        }
        <Footer {...props}/>
        </>
    )
}

Whislist.propTypes = {
    hitWhislist: PropTypes.func.isRequired,
    hitCartAddRemove: PropTypes.func.isRequired,
    authDetails: PropTypes.objectOf(PropTypes.object).isRequired,
    apparrelData: PropTypes.objectOf(PropTypes.object).isRequired,
  };
  
const dispatchToProps = { hitWhislist, hitCartAddRemove };
  
const mapStateToProps = (state) => ({
    apparrelData: state.apparrelData,
    authDetails: state.authDetails.auth,
  });
  
export default connect(mapStateToProps, dispatchToProps)(Whislist);
