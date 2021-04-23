import { useState, useContext, useEffect } from "react"
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import { hitCartAddRemove, hitWhislist } from "../../store/modules/apparrelData/actions"
import FirebaseContext from '../../services/Firebase/context';
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Card from '../../components/Card';
import "./index.scss"

const Whislist = (props) => {
    const firebase = useContext(FirebaseContext);
    const [openSignUpModal, setopenSignUpModal] = useState(false)
    const [initialWhislist,] = useState(props.apparrelData.whisList || [])

    useEffect(()=>{
        if (props.authDetails && initialWhislist.length !== props.apparrelData.whisList.length) {
            firebase.saveDataToDatabase(props.authDetails.uid, "whisList", props.apparrelData.whisList)
              } 
    },[props])

    const visulizeWhislist = (props.apparrelData.whisList || []).map((value, index) => (
        <Card index={index} value={value} key={index.toString()} {...props} openSignUpModal={()=>setopenSignUpModal(true)}/>
    ))

    return (
        <>
        <Header openSignUpModal={openSignUpModal} closeSignUpModal={()=>setopenSignUpModal(false)} {...props}/>
        <div style={{height:"100px"}}/>
        <h1 className="best-sellar-title">My Whislist</h1>
        <div className="complete-data">
          {visulizeWhislist}
      </div>
      {props.apparrelData.whisList && props.apparrelData.whisList.length === 0 ? <div>
        <h2>Oops! No item in whislist</h2>
        </div>:null}
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
