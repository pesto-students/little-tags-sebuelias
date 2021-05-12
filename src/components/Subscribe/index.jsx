import './index.sass';

const Subscribe = () => (
  <div className="subscribe-parent">
    <form className="align-subscribe">
      <input
        type="text"
        placeholder="Your Email ID"
        className="subscribe-input"
      />
      <input
        type="button"
        value="SUBSCRIBE"
        className="button subscribe-button"
      />
    </form>
  </div>
);

export default Subscribe;
