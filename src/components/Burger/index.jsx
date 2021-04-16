import PropTypes from 'prop-types';
import './index.scss';

function Burger({ open, setOpen }) {
  const burgerLineClassName = open ? 'open' : 'close';
  return (
    <div
      open={open}
      className="burger"
      role="button"
      tabIndex="0"
      onClick={() => {
        setOpen((prevValue) => !prevValue);
      }}
      onKeyDown={() => {
        // TODO : Keylistner for ENTER
        setOpen(!open);
      }}
    >
      <div className={burgerLineClassName} />
      <div className={burgerLineClassName} />
      <div className={burgerLineClassName} />
    </div>
  );
}

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Burger;
