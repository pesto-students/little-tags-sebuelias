import PropTypes from 'prop-types';
import './index.scss';

function Modal({ children, closeModal }) {
  return (
    <div className="modal-container">
      <div className="modal">
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
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
