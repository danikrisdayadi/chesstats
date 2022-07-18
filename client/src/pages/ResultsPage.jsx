import { Container, Grid, Stack } from "@mui/material";
import { PaddingY } from "../components/Spacing";
import "./ResultsPage.scss";
function ResultsPage() {
  return (
    <div>
      <h1>Results Page</h1>
      <Grid container>
        <Grid item xs={6} sm={6} md={3}>
          <Stack align="center">
            <PaddingY padding={"100px"} />
            <p>Current Rating</p>
            <p>Highest Rating</p>
            <p>Win/Loss Percentage</p>
            <p>Total Games</p>
            <p>Tactics Rating</p>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <ProfileStack />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <ProfileStack />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <ProfileStack />
        </Grid>
      </Grid>
    </div>
  );
}

function ProfileStack() {
  return (
    <Stack align="center">
      <Stack sx={{ height: "200px" }} alignItems="center">
        <img src="/chesstats_logo.png" alt="Avatar" className="profile-logo" />
        <h2>Dani Purwadi</h2>
      </Stack>
      <p>Current Rating</p>
      <p>Highest Rating</p>
      <p>Win/Loss Percentage</p>
      <p>Total Games</p>
      <p>Tactics Rating</p>
    </Stack>
  );
}

export default ResultsPage;
