import PropTypes from 'prop-types';
import "./index.scss"

const Slide = ({ content }) => (
  <div className="image-slide" style={{}}>
          <img src={content} alt="test" className="image"/>
  </div>
  )

Slide.propTypes = {
    content: PropTypes.string.isRequired
  };

export default Slide
