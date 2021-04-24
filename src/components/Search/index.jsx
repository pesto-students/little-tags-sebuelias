import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Search(props) {
  const [searchText, setsearchText] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.history.push({
        pathname: '/categories',
        state: { QueryCategory: 'search', QueryValue: searchText },
      });
    }
  };

  return (
    <div className="search-container">
      <input
        className="seach-text"
        type="text"
        placeholder="Search.."
        value={searchText}
        onChange={(event) => setsearchText(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" className="seach-button">
        <FaSearch />
      </button>
    </div>
  );
}

Search.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Search;
