import PropTypes from 'prop-types';
import './index.sass';

function Sort(props) {

  const handleDropDownValue = (event) => {
    props.handleDropDownValue(event);
  };

  return (
    <div
      className="drop-down-div"
    >
          <input
            type="button"
            className="dropdown-content general-font-design"
            value="NONE"
            name={1}
            onClick={handleDropDownValue}
          />
          <input
            type="button"
            className="dropdown-content general-font-design"
            value="HIGH TO LOW"
            name={1}
            onClick={handleDropDownValue}
          />
          <input
            type="button"
            className="dropdown-content general-font-design"
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
