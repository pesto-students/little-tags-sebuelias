import { useEffect } from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import { hitOrderAdd, hitFirebaseApparel } from '../../store/modules/apparrelData/actions';
import "./index.scss";

function Payment(props) {
  const options = {
    key: "rzp_test_i51KPDC4npsKdK",
    amount: "100", //  = INR 1
    name: "Acme shop",
    description: "some description",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    // eslint-disable-next-line func-names
    "handler": function (response){
        // props.hitOrderAdd({
        //     order: {address : props.apparrelData.address[props.location.state.AddIndex], cart: props.apparrelData.cart,
        //     orderDate: Date.now()},paymentId:response.razorpay_payment_id
        //   })
          const order = [...props.apparrelData.order, {address : props.apparrelData.address[props.location.state.AddIndex], cart: props.apparrelData.cart,
            orderDate: Date.now(),paymentId:response.razorpay_payment_id}]
          props.hitFirebaseApparel({
            cart: [],
            whisList: props.apparrelData.whisList || [],
            address: props.apparrelData.address || [],
            order,
          });
        props.history.push({pathname: "/order-placed", state: {previousLocation : "order-placed"}})
    },
    prefill: {
      name: "Gaurav",
      contact: "8708981073",
      email: "tka86086@gmail.com"
    },
    notes: {
      address: "some address"
    },
    theme: {
      color: "blue",
      hide_topbar: false
    }
  };

  const rzp1 = new window.Razorpay(options);

  useEffect(() => {
    rzp1.open();
  }, []);

  // eslint-disable-next-line prefer-arrow-callback
  rzp1.on('payment.failed', function failed(){
    props.history.push({pathname: "/address"})
})

  return (
    <div className="App"/>
  );
}

Payment.propTypes = {
    history: PropTypes.objectOf(PropTypes.object).isRequired,
    // hitOrderAdd: PropTypes.func.isRequired,
    hitFirebaseApparel: PropTypes.func.isRequired,
    apparrelData: PropTypes.objectOf(PropTypes.object).isRequired,
    location: PropTypes.objectOf(PropTypes.object).isRequired,
  };
  

// export default Payment;
const dispatchToProps = { hitOrderAdd, hitFirebaseApparel };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default connect(mapStateToProps, dispatchToProps)(Payment);
