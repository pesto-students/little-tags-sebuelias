import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestData } from '../../store/modules/apparrelData/actions';
import Card from "../../components/Card"
import Sort from "../../components/Sort"
import FilterBox from "../../components/FilterBox"
import "./index.sass"

function Category(props) {
  
  const [Products, setProducts] = useState([])
  const [currCategory, setcurrCategory] = useState(props.location.state.QueryCategory.toUpperCase() || "ALL PRODUCTS")
  const [, setsortedValue] = useState("SORT: NONE")

  useEffect(() => {
    if(!props.location.state  || props.location.state.QueryCategory === 'all-products') {
      setProducts(props.apparrelData)
    } else if(props.location.state.QueryCategory === 'search') {
      setProducts(props.apparrelData)
    } else {
      const filteredCategory = (props.apparrelData || []).filter(({category}) => category === props.location.state.QueryCategory)
      setProducts(filteredCategory)
    }
  }, [props])

  const filterBox = (value) => {
    if(value === 'all-products') {
      setProducts(props.apparrelData)
      setcurrCategory("ALL PRODUCTS")
    } else {
      const filteredCategory = (props.apparrelData || []).filter(({category}) => category === value)
      setProducts(filteredCategory)
      setcurrCategory(value.toUpperCase())
    }
  }
    
  useEffect(() => {
    if (!props.apparrelData) {
      props.requestData();
    }
  }, [])

  const handleDropDownValue = (event) => {
    if (event.target.value === 'SORT BY: HIGH TO LOW') {
      Products.sort((firstVal, secondVal) => secondVal.price - firstVal.price);
    } else if (event.target.value === 'SORT BY: LOW TO HIGH') {
      Products.sort((firstVal, secondVal) => firstVal.price - secondVal.price);
    } else {
      Products.sort(() => 0.5 - Math.random());
    }
    setsortedValue(event.target.value)
  };

  const visualizeBestSellarBox = (Products || []).map((value, index) =>(
    <Card index={index} value={value} key={index.toString()} {...props}/>
  ))

  return (
    <>
    <div style={{height:"100px"}}/>
     <h1 className="best-sellar-title">{currCategory}</h1>
     <div className="flex-row flex-one">
         <FilterBox filterBox={(value) => filterBox(value)}/>
       <div className="flex-column flex-one">
         <Sort handleDropDownValue={(event) => {handleDropDownValue(event)}} />
         <div className="complete-data">
          {visualizeBestSellarBox}
      </div>
       </div>
     </div>
    </>
  );
}

Category.propTypes = {
  requestData: PropTypes.func.isRequired,
  QueryCategory: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  apparrelData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const dispatchToProps = { requestData };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData.apparrelData,
});


export default connect(mapStateToProps, dispatchToProps)(Category);
