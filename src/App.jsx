import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Calculator } from './Calculator';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
