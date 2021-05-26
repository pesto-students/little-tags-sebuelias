import PropTypes from 'prop-types';
import './index.scss';
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
import { withRouter } from 'react-router-dom';
import Subscribe from '../Subscribe';
import AppStoreIcon from '../../assets/image/app_store_icon.png';
import PlayStoreIcon from '../../assets/image/play_store_icon.png';

const Footer = (props) => (
  <footer className="flex-column footer border-line fix-bottom">
    <Subscribe />
    <div className="flex-row flex-wrap-with-justify footer-flex-margin border-line">
      <div className="flex-column contact-box">
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
        <ul className="footer-category">
          <li
            onClick={() => {
              props.history.push({
                pathname: '/categories',
                state: { QueryCategory: 'all-products' },
              });
            }}
            aria-hidden="true"
          >
            All
          </li>
          <li
            onClick={() => {
              props.history.push({
                pathname: '/categories',
                state: { QueryCategory: 'men clothing' },
              });
            }}
            aria-hidden="true"
          >
            Mens
          </li>
          <li
            onClick={() => {
              props.history.push({
                pathname: '/categories',
                state: { QueryCategory: 'women clothing' },
              });
            }}
            aria-hidden="true"
          >
            Womens
          </li>
          <li
            onClick={() => {
              props.history.push({
                pathname: '/categories',
                state: { QueryCategory: 'electronics' },
              });
            }}
            aria-hidden="true"
          >
            Electronics
          </li>
          <li
            onClick={() => {
              props.history.push({
                pathname: '/categories',
                state: { QueryCategory: 'jewelery' },
              });
            }}
            aria-hidden="true"
          >
            Jewelery
          </li>
        </ul>
      </div>
      <div className="flex-column cards">
        <div className="flex-column">
          <h3>Connect</h3>
          <ul className="flex-row flex-wrap-with-justify">
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
        <div className="flex-column">
          <h3>We accept:</h3>
          <ul className="flex-row flex-wrap-with-justify">
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
      <div className="flex-column cards">
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
    <div className="flex-row flex-wrap-with-justify footer-flex-margin">
      <p>© 2021, Little Tags Website</p>
      <p>All Rights Reserved.</p>
    </div>
  </footer>
);

Footer.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withRouter(Footer);
