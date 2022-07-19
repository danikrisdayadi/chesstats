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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Filler,
  Tooltip,
  Legend
);

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
            <Route path="/compare/:username/:otherUsername" element={<ResultsPage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </div >
  );
}

export default App;
