import { FaSearch } from 'react-icons/fa';
import './index.scss';

function Search() {
  return (
    <div className="search-container">
      <input className="seach-text" type="text" placeholder="..." />
      <button type="button" className="seach-button">
        <FaSearch />
      </button>
    </div>
  );
}

export default Search;
