import React from 'react';
import mainPageImage from '../assets/images/Main-page.jpg';
import './MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <img src={mainPageImage} alt="Main Page" className="main-page-image" />
      {/* Add other main page content here */}
    </div>
  );
}

export default MainPage;

