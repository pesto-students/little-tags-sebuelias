import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestData } from '../../store/modules/apparrelData/actions';
import Card from '../../components/Card';
import Sort from '../../components/Sort';
import FilterBox from '../../components/FilterBox';
import './index.sass';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Category(props) {
  const [Products, setProducts] = useState([]);
  const [currCategory, setcurrCategory] = useState(
    props.location.state && props.location.state.QueryCategory
      ? props.location.state.QueryCategory.toUpperCase()
      : 'ALL PRODUCTS'
  );
  const [openSignUpModal, setopenSignUpModal] = useState(false);
  const [, setsortedValue] = useState('SORT: NONE');

  useEffect(() => {
    if(!props.location.state || !props.location.state.QueryCategory || props.location.state.QueryCategory === 'all-products') {
      setProducts(props.apparrelData)
    } else if(props.location.state.QueryCategory === 'search') {
      setcurrCategory("SEARCH")
      const QueryValue = props.location.state.QueryValue.toLowerCase() || ""
      const filteredCategory = (props.apparrelData || []).filter(({category, description, title}) => 
      category.toLowerCase().indexOf(QueryValue) !== -1 || title.toLowerCase().indexOf(QueryValue) !== -1 || description.toLowerCase().indexOf(QueryValue) !== -1)
      setProducts(filteredCategory)
    } else {
      const filteredCategory = (props.apparrelData || []).filter(
        ({ category }) => category === props.location.state.QueryCategory
      );
      setProducts(filteredCategory);
    }
  }, [props]);

  const filterBox = (value) => {
    if (value === 'all-products') {
      setProducts(props.apparrelData);
      setcurrCategory('ALL PRODUCTS');
    } else {
      const filteredCategory = (props.apparrelData || []).filter(
        ({ category }) => category === value
      );
      setProducts(filteredCategory);
      setcurrCategory(value.toUpperCase());
    }
  };

  useEffect(() => {

    // if (!props.apparrelData) {
    //   props.requestData();
    // }

    const onUnload = () => {
      const {state} = props.location;
      if (state.QueryCategory === "search") {
        delete state.QueryCategory;
      }
      state.QueryCategory = currCategory.toLowerCase()
      props.history.replace({pathname: "/categories" , state });
    }
    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, [])

  const handleDropDownValue = (event) => {
    if (event.target.value === 'SORT BY: HIGH TO LOW') {
      Products.sort((firstVal, secondVal) => secondVal.price - firstVal.price);
    } else if (event.target.value === 'SORT BY: LOW TO HIGH') {
      Products.sort((firstVal, secondVal) => firstVal.price - secondVal.price);
    } else {
      Products.sort(() => 0.5 - Math.random());
    }
    setsortedValue(event.target.value);
  };

  const visualizeBestSellerBox = (Products || []).map((value, index) => (
    <Card
      index={index}
      value={value}
      key={index.toString()}
      {...props}
      openSignUpModal={() => setopenSignUpModal(true)}
    />
  ));

  return (
    <>
      <div style={{ height: '100px' }} />

      <div className="flex-row flex-one">
        <FilterBox filterBox={(value) => filterBox(value)} />
        <div className="flex-column flex-one">
          <div className="category-header">
          <h1 className="best-sellar-title">{currCategory === "SEARCH" ? `${currCategory} ${props.location.state.QueryValue}` :currCategory }</h1>
            <Sort
              handleDropDownValue={(event) => {
                handleDropDownValue(event);
              }}
            />
          </div>
          {visualizeBestSellerBox.length ? <div className="complete-data">
          {visualizeBestSellerBox}
      </div>: <div>
        <h2>Oops! Your query does not match any item</h2>
        </div>
        }
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
  authDetails: state.authDetails.auth,
});

export default connect(mapStateToProps, dispatchToProps)(Category);
