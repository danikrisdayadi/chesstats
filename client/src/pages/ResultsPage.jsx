import { Container, Grid, Stack } from "@mui/material";
import { PaddingY } from "../components/Spacing";
import { Radar } from "react-chartjs-2";
import "./ResultsPage.scss";

function ResultsPage() {
  const data = {
    labels: [
      "Current Rating",
      "Highest Rating",
      "W/L Percentage  ",
      "Total Games",
      "Tactics Rating",
    ],
    datasets: [
      {
        label: "User 1",
        data: [0.2, 0.9, 0.3, 0.5, 0.2],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "User 2",
        data: [0.3, 0.2, 0.6, 0.8, 0.7],
        backgroundColor: "rgba(173, 193, 120, 0.2)",
        borderColor: "rgba(173, 193, 120, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      r: {
        ticks: {
          color: "rgba(0, 0, 0, 0)",
          backdropColor: "rgba(0, 0, 0, 0)",
        },
        min: 0,
        max: 1,
      },
    },
  };
  return (
    <Container>
      <h1>Results Page</h1>
      <Grid container>
        <Grid item xs={6} sm={6} md={2}>
          <Stack>
            <PaddingY padding={"15vh"} />
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
        <Grid item xs={6} sm={6} md={4}>
          <Radar data={data} options={options} />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <ProfileStack />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} md={5}>
          <h1>Win Probability:</h1>
          <p>*Win Probability is based on ELO rating</p>
        </Grid>
        <Grid item xs={6} md={4} align="center">
          <h1>25%</h1>
        </Grid>
      </Grid>
    </Container>
  );
}

function ProfileStack() {
  return (
    <Stack align="center">
      <Stack sx={{ height: "30vh" }} alignItems="center">
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
