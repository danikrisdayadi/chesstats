import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import "./NavigationBar.scss";
import { Toolbar } from "@mui/material";

function NavigationBar() {
  return (
    <Box className="navigation-box">
      <AppBar position="static" className="navigation-bar">
        <Toolbar style={{ minHeight: "100%" }}>
          <Button>
            <img src="/chesstats_logo.png" alt="logo" className="logo" />
          </Button>
          <h1>Test data</h1>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavigationBar;
