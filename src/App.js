import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { useCookies } from "react-cookie";
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

import ComparePage from './pages/ComparePage';
import LandingPage from './pages/LandingPage';
import Error404Page from './pages/Error404Page';
import NavigationBar from './components/NavigationBar';
import SharePage from './pages/SharePage';
import ResultsPage from './pages/ResultsPage';
import CompareOthersPage from './pages/CompareOthersPage';
import AboutPage from './pages/AboutPage';
import "./App.scss";

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
  const [cookies] = useCookies(["username"]);
  const spinner = document.getElementById('spinner');
  const [loading, setLoading] = useState(true);

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);

  }

  return (
    !loading && (<div className="app">
      <StyledEngineProvider injectFirst>
        <CookiesProvider>
          <NavigationBar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/compare" element={cookies.username ? <Navigate to={`/compare/${cookies.username}`} replace /> : <ComparePage />} />
              <Route path="/compare/:username" element={<SharePage />} />
              <Route path="/compare/:username/:otherUsername" element={<ResultsPage />} />
              <Route path="/share/:otherUsername/:username" element={<ResultsPage />} />
              <Route path="/share/:sharedUsername" element={cookies.username ? <Navigate to={`${cookies.username}`} replace /> : <ComparePage />} />
              <Route path="/others" element={< CompareOthersPage />} />
              <Route path="/relogin" element={<ComparePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Error404Page />} />
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </StyledEngineProvider>
    </div >
    )
  );
}

export default App;
