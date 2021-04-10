import './index.sass';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmazonPay,
  FaCcPaypal,
} from 'react-icons/fa';
import AppStoreIcon from '../../assets/image/app_store_icon.png';
import PlayStoreIcon from '../../assets/image/play_store_icon.png';

const Footer = () => (
  <>
    <div className="general-flex-dir-column footer border-line">
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
      <div className="general-flex-dir-row general-flex-wrap-with-justify footer-flex-margin border-line">
        <div className="general-flex-dir-column contact-box">
          <h3>Contact Info</h3>
          <ul>
            <li>Phone: (+91) 9876 543 210</li>
            <li>
              Address: 1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052,
              United State
            </li>
          </ul>
        </div>
        <div>
          <h3>Categories</h3>
          <ul>
            <li>Accessories (45)</li>
            <li>Jeans (278)</li>
            <li>Tops (64)</li>
            <li>Jackets (3)</li>
          </ul>
        </div>
        <div className="general-flex-dir-column">
          <div className="general-flex-dir-column">
            <h3>Connect</h3>
            <ul className="general-flex-dir-row general-flex-wrap-with-justify">
              <li>
                <FaFacebookSquare />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaTwitterSquare />
              </li>
              <li>
                <FaYoutubeSquare />
              </li>
            </ul>
          </div>
          <div className="general-flex-dir-column">
            <h3>We accept:</h3>
            <ul className="general-flex-dir-row general-flex-wrap-with-justify">
              <li>
                <FaCcMastercard />
              </li>
              <li>
                <FaCcVisa />
              </li>
              <li>
                <FaCcAmazonPay />
              </li>
              <li>
                <FaCcPaypal />
              </li>
            </ul>
          </div>
        </div>
        <div className="general-flex-dir-column">
          <h5>Download App</h5>
          <div>
            <img src={AppStoreIcon} className="store-icon" alt="googlePlay" />
          </div>
          <div>
            <img
              src={PlayStoreIcon}
              className="store-icon store-icon-google"
              alt="applePlay"
            />
          </div>
        </div>
      </div>
      <div className="general-flex-dir-row general-flex-wrap-with-justify footer-flex-margin border-line">
        <p>© 2021, Little Tags Website</p>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  </>
);

export default Footer;
