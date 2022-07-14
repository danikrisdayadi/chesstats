import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./NavigationBar.scss";
import { Container, Toolbar } from "@mui/material";

function NavigationBar() {
  return (
    <Box className="navigation-box">
      <AppBar position="static" className="navigation-bar">
        <Container maxWidth="xl" className="navigation-bar">
          <Toolbar style={{ minHeight: "30px", height: "100%" }}>
            <Button>
              <img
                src="/chesstats_navbar_logo.png"
                alt="logo"
                className="logo"
              />
            </Button>
            <Container sx={{ flexGrow: 1 }}></Container>
            <h3 className="text">Compare</h3>
            <h3 className="text">About</h3>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavigationBar;
