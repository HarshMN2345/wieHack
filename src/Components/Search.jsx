import React, { useState } from 'react';
import './Search.scss'; // Import the SCSS file for styling

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="all">
      <div className="body5">
        <label>
          {/* Use state for input value and handle change event */}
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="What's on your mind?"
            required
          />
          <ul>
            <li>s</li>
            <li>e</li>
            <li>a</li>
            <li>r</li>
            <li>c</li>
            <li>h</li>
          </ul>
        </label>
      </div>
    </div>
  );
};

export default Search;
