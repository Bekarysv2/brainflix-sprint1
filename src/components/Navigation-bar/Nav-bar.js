import './Nav-bar.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import searchIcon from '../../assets/Icons/search.svg';
import mohanImg from '../../assets/Images/Mohan-muruge.jpg';
import React, { useState } from 'react';

const NavigationBar = () => {

  return (
    <nav className="nav">
      <a src="/">
        <img src={logo} alt="BrainFlix Logo" className="nav__logo" />
      </a>
      <div className="nav__container">
        <input
          type="search"
          placeholder="Search"
          className="nav__search"
          id="search-input"
        ></input>
        <img src={searchIcon} alt="search-icon" className="nav__container__search"></img>
        <a src="/" className="nav__upload-buttons button">
          UPLOAD
        </a>
        <div className="nav__profle">
          <img src={mohanImg} alt="Mohan-profile" className="nav__mohan"></img>
        </div>
      </div>
      <a src="/" className="nav__upload-buttons button-mobile">
        UPLOAD
      </a>
    </nav>
  );
}

export default NavigationBar;