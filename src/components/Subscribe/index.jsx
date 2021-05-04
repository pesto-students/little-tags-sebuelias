import './index.sass';

const Subscribe = () =>(
    <div className="subscribe-parent">
    <form>
      <input
        type="text"
        placeholder="Your Email ID"
        className="subscribe-input"
      />
      <input type="button" value="SUBSCRIBE" className="subscribe-button" />
    </form>
  </div>
)

export default Subscribe
