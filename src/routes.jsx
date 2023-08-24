import Home from './screans/home/';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function RoutesConfig() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
