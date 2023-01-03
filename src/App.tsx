import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import MainPage from './pages/MainPage';
import SelectedAirplane from './pages/SelectedAirplane';

/* I am routing from the main page to the selected airplane seat map page and back. Both pages covered with Layout which includes Header and Footer. Airplanes images and their seat maps are fetched from the API server using each airplane id. */

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='airplanes/:id' element={<SelectedAirplane />} />
      </Route>
    </Routes>
  );
};

export default App;
