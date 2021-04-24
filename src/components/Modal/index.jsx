import PropTypes from 'prop-types';
import './index.scss';

function Modal({ children, width, height }) {
  return (
    <div className="modal-container">
      <div className="modal" style={{ width, height }}>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Modal;
