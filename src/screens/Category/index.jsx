import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  requestData,
  changeSignUpBool,
} from '../../store/modules/apparrelData/actions';
import Card from '../../components/Card';
import FilterBox from '../../components/FilterBox';
import './index.scss';
import Loader from '../../components/Loader';
import FilterBoxMobile from '../../components/FilterBox/FilterMobile';

function Category(props) {
  const [Products, setProducts] = useState([]);
  const [currCategory, setcurrCategory] = useState(
    props.location.state && props.location.state.QueryCategory
      ? props.location.state.QueryCategory.toUpperCase()
      : 'ALL PRODUCTS'
  );
  const [, setsortedValue] = useState('SORT: NONE');
  const categoryRef = useRef(currCategory);
  categoryRef.current = currCategory;

  useEffect(() => {
    if (
      !props.location.state ||
      !props.location.state.QueryCategory ||
      props.location.state.QueryCategory === 'all-products' ||
      props.location.state.QueryCategory === 'all products'
    ) {
      setProducts(props.apparrelData);
    } else if (props.location.state.QueryCategory === 'search') {
      setcurrCategory('SEARCH');
      const QueryValue = props.location.state.QueryValue.toLowerCase() || '';
      const filteredCategory = (props.apparrelData || []).filter(
        ({ category, description, title }) =>
          category.toLowerCase().indexOf(QueryValue) !== -1 ||
          title.toLowerCase().indexOf(QueryValue) !== -1 ||
          description.toLowerCase().indexOf(QueryValue) !== -1
      );
      setProducts(filteredCategory);
    } else {
      const filteredCategory = (props.apparrelData || []).filter(
        ({ category }) => category === props.location.state.QueryCategory
      );
      setProducts(filteredCategory);
      setcurrCategory(props.location.state.QueryCategory.toUpperCase());
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
    const onUnload = () => {
      const { state } = props.location;
      state.QueryCategory = categoryRef.current.toLowerCase();
      if (state.QueryCategory === 'search') {
        delete state.QueryCategory;
      }
      props.history.replace({ pathname: '/categories', state });
    };
    window.addEventListener('beforeunload', onUnload);
    return () => window.removeEventListener('beforeunload', onUnload);
  }, []);

  const handleDropDownValue = (event) => {
    if (event.target.value === 'HIGH TO LOW') {
      Products.sort((firstVal, secondVal) => secondVal.price - firstVal.price);
    } else if (event.target.value === 'LOW TO HIGH') {
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
      openSignUpModal={() => props.changeSignUpBool({ signUpModal: true })}
    />
  ));

  const renderEmpty = setTimeout(
    () => (
      <div>
        <h2>Oops! Your query does not match any item</h2>
      </div>
    ),
    2000
  );

  return (
    <>
      <div style={{ height: '100px' }} />
      {!props.apparrelData || props.apparrelData.loader ? (
        <div className="loader-align">
          <Loader />
        </div>
      ) : (
        <div className="flex-row flex-one">
          {window.innerWidth > 470 ? (
            <FilterBox
              currCategory={categoryRef.current}
              filterBox={(value) => filterBox(value)}
              handleDropDownValue={(event) => {
                handleDropDownValue(event);
              }}
            />
          ) : null}
          <div className="flex-column flex-one">
            <div className="category-header">
              <h1 className="best-seller-title">
                {currCategory === 'SEARCH'
                  ? `${props.location.state.QueryValue}`
                  : currCategory}
              </h1>
            </div>
            {visualizeBestSellerBox.length ? (
              <div className="complete-data">{visualizeBestSellerBox}</div>
            ) : (
              renderEmpty
            )}
          </div>
          {window.innerWidth <= 470 ? (
            <FilterBoxMobile
              currCategory={categoryRef.current}
              filterBox={(value) => filterBox(value)}
              handleDropDownValue={(event) => {
                handleDropDownValue(event);
              }}
            />
          ) : null}
        </div>
      )}
    </>
  );
}

Category.propTypes = {
  requestData: PropTypes.func.isRequired,
  QueryCategory: PropTypes.string.isRequired,
  changeSignUpBool: PropTypes.func.isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  apparrelData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const dispatchToProps = { requestData, changeSignUpBool };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData.apparrelData,
  authDetails: state.authDetails.auth,
});

export default connect(mapStateToProps, dispatchToProps)(Category);
