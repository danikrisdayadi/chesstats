import { Avatar, Button, Container, Divider, Stack, Grid } from "@mui/material";
import { Box } from "@mui/system";
import "./LandingPage.scss";
import { PaddingY } from "../components/Spacing";

function LandingPage() {
  return (
    <div>
      <Container maxWidth="xl" align="center" className="main-container">
        <PaddingY padding={"5vh"} />

        <h1>Compare your Chess.com Statistics with others!</h1>
        <Box className="text-box">
          <p>
            Chesstats allows you to compare basic statistics of your Chess.com
            account with other players. Click below to start comparing with your
            friends or one of our featured accounts!
          </p>
        </Box>
        <PaddingY padding={"2vh"} />

        <Button color="success" variant="outlined" size="large">
          Start Comparing!
        </Button>
        <PaddingY padding={"5vh"} />

        <Divider style={{ width: "50%" }}>or</Divider>
        <PaddingY padding={"5vh"} />

        <p>Compare with one of famous Chess.com users!</p>
        <PaddingY padding={"2vh"} />

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
        <PaddingY padding={"5vh"} />
      </Container>
      <div className="about-container">
        <Container maxWidth="lg" align="center">
          <PaddingY padding={"5vh"} />
          <h1>About Chesstats</h1>
          <p>
            Chesstats is a simple summer holiday project to brush up some
            programming. If you would like to support the website or suggest
            improvements, do let the developers know using the form below!
          </p>
          <PaddingY padding={"2vh"} />
          <Button variant="outlined" size="large">
            Suggestion Form
          </Button>
          <PaddingY padding={"5vh"} />
        </Container>
      </div>
    </div>
  );
}

export default LandingPage;
