import { useState } from 'react';
import PropTypes from 'prop-types';
import './index.sass';

function Sort(props) {
  const [openDropDown, setopenDropDown] = useState(false);
  const [sortedValue, setsortedValue] = useState('SORT: NONE');

  const handleDropDownValue = (event) => {
    setsortedValue(event.target.value);
    setopenDropDown(!openDropDown);
    props.handleDropDownValue(event);
  };

  return (
    <div
      className="drop-down-div"
      onMouseLeave={(event) => {
        event.preventDefault();
        setopenDropDown(false);
      }}
    >
      <input
        id="level"
        name="level"
        type="button"
        onClick={() => setopenDropDown(!openDropDown)}
        onMouseOver={(event) => {
          event.preventDefault();
          setopenDropDown(true);
        }}
        onFocus={(event) => {
          event.preventDefault();
          setopenDropDown(false);
        }}
        className="dropdown general-font-design"
        value={sortedValue}
      />

      {openDropDown ? (
        <div className="dropdown-menu dropdown-menu-width">
          <input
            type="button"
            className="dropdown-content general-font-design"
            value="SORT: NONE"
            name={1}
            onClick={handleDropDownValue}
          />
          <input
            type="button"
            className="dropdown-content general-font-design"
            value="SORT BY: HIGH TO LOW"
            name={1}
            onClick={handleDropDownValue}
          />
          <input
            type="button"
            className="dropdown-content general-font-design"
            value="SORT BY: LOW TO HIGH"
            name={1.5}
            onClick={handleDropDownValue}
          />
        </div>
      ) : null}
    </div>
  );
}

Sort.propTypes = {
  handleDropDownValue: PropTypes.func.isRequired,
};

export default Sort;
