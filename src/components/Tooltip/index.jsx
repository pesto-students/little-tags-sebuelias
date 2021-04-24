import { useState } from "react";
import PropTypes from 'prop-types';
import "./index.scss";

const Tooltip = ({ children, direction, add }) => {

  const [active, setActive] = useState(false);

  const showTip = () => {
    setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
      <div className={`Tooltip-Tip ${direction || "bottom"}`}>
        {add}
      </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.string,
    add: PropTypes.string.isRequired,
  };

  Tooltip.defaultProps = {
    direction: "bottom",
  };
  

export default Tooltip;
