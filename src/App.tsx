import React from 'react';
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/dashboard'} element={<Dashboard/>} />
              <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
              />
          </Routes>
      </BrowserRouter>
  );
};

export default App;
