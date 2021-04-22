import PropTypes from 'prop-types';
import './index.scss';

function Modal({ children, width, height, closeModal }) {
  return (
    <div className="modal-container">
      <div className="modal" style={{ width, height }}>
        <button
          className="close button"
          onClick={() => closeModal()}
          aria-hidden="true"
          type="button"
        >
          close
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Modal;
