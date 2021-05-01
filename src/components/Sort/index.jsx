import PropTypes from 'prop-types';
import { useState } from 'react';
import './index.sass';

function Sort(props) {
  const [selected, setselected] = useState('');

  const handleDropDownValue = (event) => {
    setselected(event.target.value);
    props.handleDropDownValue(event);
  };

  return (
    <div className="drop-down-div">
      <input
        type="button"
        className={`dropdown-content general-font-design Category ${
          selected === 'NONE' ? 'selected-category' : ''
        }`}
        value="NONE"
        name={1}
        onClick={handleDropDownValue}
      />
      <input
        type="button"
        className={`dropdown-content general-font-design  Category ${
          selected === 'HIGH TO LOW' ? 'selected-category' : ''
        }`}
        value="HIGH TO LOW"
        name={1}
        onClick={handleDropDownValue}
      />
      <input
        type="button"
        className={`dropdown-content general-font-design  Category ${
          selected === 'LOW TO HIGH' ? 'selected-category' : ''
        }`}
        value="LOW TO HIGH"
        name={1.5}
        onClick={handleDropDownValue}
      />
    </div>
  );
}

Sort.propTypes = {
  handleDropDownValue: PropTypes.func.isRequired,
};

export default Sort;
