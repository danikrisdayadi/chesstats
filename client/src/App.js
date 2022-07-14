import * as React from 'react';
import LandingPage from './landing/LandingPage';
import NavigationBar from './components/NavigationBar';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <NavigationBar />
        <LandingPage />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
