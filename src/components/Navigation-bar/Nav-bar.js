import './Nav-bar.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import React, { useState } from 'react';

const NavigationBar = ({ onSearchSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearchSubmit(searchTerm);
      setSearchTerm(''); // Reset the search term after submission
    };
  
    return (
      <header className="header">
        <img src={logo} alt="Brainflix logo" className="header__logo" />
        
        <form className="header__search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            name="search"
            className="header__search-input"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="header__search-button">
            🔍
          </button>
        </form>
        
        <button className="header__upload-button">
          UPLOAD
        </button>
      </header>
    );
  };
  

export default NavigationBar;