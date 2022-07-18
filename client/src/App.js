import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComparePage from './pages/ComparePage';
import LandingPage from './pages/LandingPage';
import Error404Page from './pages/Error404Page';
import NavigationBar from './components/NavigationBar';
import "./App.scss";
import SharePage from './pages/SharePage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <div className="app">
      <StyledEngineProvider injectFirst>
        <NavigationBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/compare/:username" element={<SharePage />} />
            <Route path="/compare/:username/:username2" element={<ResultsPage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </div >
  );
}

export default App;
