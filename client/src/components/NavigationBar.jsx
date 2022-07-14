import AppBar from "@mui/material/AppBar";
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
            <img src="/chesstats_navbar_logo.png" alt="logo" className="logo" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavigationBar;
