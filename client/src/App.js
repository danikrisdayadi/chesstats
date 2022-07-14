import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Error404Page from './pages/Error404Page';
import NavigationBar from './components/NavigationBar';
import { StyledEngineProvider } from '@mui/material/styles';
import "./App.scss";

function App() {
  return (
    <div className="app">
      <StyledEngineProvider injectFirst>
        <NavigationBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </div >
  );
}

export default App;
