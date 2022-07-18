import { Container, Grid, Stack } from "@mui/material";
import { PaddingY } from "../components/Spacing";
import "./ResultsPage.scss";
import ResultsRadarChart from "../components/ResultsRadarChart";
import ResultsBarChart from "../components/ResultsBarChart";

function ResultsPage() {
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
        <Grid item xs={6} sm={6} md={4} align="center">
          <div className="chart-container">
            <ResultsRadarChart
              usernames={["Dani", "Adam"]}
              stats={[
                [0.1, 0.2, 0.3, 0.4, 0.5],
                [0.5, 0.4, 0.3, 0.2, 0.8],
              ]}
            />
          </div>
          <div className="bar-container">
            <ResultsBarChart label="ELO rating" stats={[[0.1], [0.5]]} />
          </div>
          <div className="bar-container">
            <ResultsBarChart label="ELO rating" stats={[[0.4], [0.2]]} />
          </div>
          <div className="bar-container">
            <ResultsBarChart label="ELO rating" stats={[[0.9], [0.8]]} />
          </div>
          <div className="bar-container">
            <ResultsBarChart label="ELO rating" stats={[[0.2], [0.6]]} />
          </div>
          <div className="bar-container">
            <ResultsBarChart label="ELO rating" stats={[[0.4], [0.4]]} />
          </div>
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
      <div className="data-list">
        <p>Current Rating</p>
      </div>
      <div className="data-list">
        <p>Highest Rating</p>
      </div>

      <div className="data-list">
        <p>Win/Loss Percentage</p>
      </div>
      <div className="data-list">
        <p>Total Games</p>
      </div>
      <div className="data-list">
        <p>Tactics Rating</p>
      </div>
    </Stack>
  );
}

export default ResultsPage;
