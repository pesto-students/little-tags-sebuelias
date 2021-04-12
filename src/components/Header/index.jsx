import { useState, useRef } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import Burger from '../Burger';
import Menu from '../Menu';
import Search from '../Search';
import './index.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setMenuOpen(false));

  return (
    <nav className="header">
      <div className="hamburger-parent" ref={menuRef}>
        <Burger open={menuOpen} setOpen={setMenuOpen} />
        <Menu open={menuOpen} />
      </div>

      <h1 className="title">Little Tags</h1>

      <div className="search-container">
        <Search />
      </div>

      <div className="header-buttons">
        <ul>
          <li>
            <a
              className="login"
              href="login.html"
              data-toggle="tooltip"
              data-selector="true"
              data-placement="bottom"
              title="Login / Register"
            >
              Login / register
            </a>
          </li>
        </ul>

        <ul>
          <li className="wishlist">
            <FaRegHeart />
            <span className="item-count">5</span>
          </li>
        </ul>

        <ul>
          <li className="cart">
            <FiShoppingBag />
            <span className="item-count">5</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
