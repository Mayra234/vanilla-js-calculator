import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts';
import { Calculator } from './pages/Calculator';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Calculator />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
