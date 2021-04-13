import PropTypes from 'prop-types';
import "./index.sass"

function Modal({children}) {
    return (
        <>
        <div className="modal">
            {children}
        </div>
        </>
    )
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
  }


export default Modal
