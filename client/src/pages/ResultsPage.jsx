import { Container, Grid, Stack } from "@mui/material";
import { PaddingY } from "../components/Spacing";
import { Radar } from "react-chartjs-2";
import "./ResultsPage.scss";

function ResultsPage() {
  const data = {
    labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container>
      <h1>Results Page</h1>
      <Grid container>
        <Grid item xs={6} sm={6} md={2}>
          <Stack>
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
          <Radar data={data} />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <ProfileStack />
        </Grid>
      </Grid>
    </Container>
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
