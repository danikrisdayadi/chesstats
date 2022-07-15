import "./LandingPage.scss";
import { Avatar, Button, Container, Divider, Stack, Grid } from "@mui/material";
import { Box } from "@mui/system";

function LandingPage() {
  return (
    <Container maxWidth="xl" align="center" className="container">
      <h1>Compare your Chess.com Statistics with others!</h1>
      <Box className="text-box">
        <p>
          Chesstats allows you to compare basic statistics of your Chess.com
          account with other players. Click below to start comparing with your
          friends or one of our featured accounts!
        </p>
      </Box>
      <Button color="success" variant="outlined" size="large">
        Start Comparing!
      </Button>
      <Divider style={{ width: "50%" }}>or</Divider>
      <p>Compare with one of famous Chess.com users!</p>
      <Container>
        <Grid container>
          {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={6} sm={6} md={3}>
              <Stack alignItems="center" className="stack">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: "60px", height: "60px" }}
                />
                <p>Remy Sharp</p>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default LandingPage;
