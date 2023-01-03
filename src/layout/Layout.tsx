import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// This is the layout used for both: main page and the selected airplane seat map page.

const Layout: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-t from-blue-100 via-blue-200 to-blue-300'>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
