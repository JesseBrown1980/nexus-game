import React from 'react';
import MainPage from '../MainPage/MainPage';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css';

function Layout() {
  return (
    <div className="layout">
      <MainPage />
      {/* Other layout components like Navigation, Sidebar, etc. */}
    </div>
  );
}

export default Layout;
