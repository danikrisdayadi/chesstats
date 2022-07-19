import { Button, Container, Grid, Stack } from "@mui/material";
import { PaddingY } from "../components/Spacing";
import ResultsRadarChart from "../components/ResultsRadarChart";
import ResultsBarChart from "../components/ResultsBarChart";
import * as utils from "../utils/utils";
import "./ResultsPage.scss";
import { useState } from "react";

function ResultsPage() {
  const [timeControl, setTimeControl] = useState("bullet");
  return (
    <Container maxWidth="xl">
      <h1>Results Page</h1>
      <Grid container>
        <Grid item xs={6} sm={6} md={1}>
          <Stack>
            <PaddingY padding={"15vh"} />
            <p>Current Rating</p>
            <p>Highest Rating</p>
            <p>Win/Loss %</p>
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
        <Grid item xs={6} sm={6} md={1}>
          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            sx={{ height: "100%" }}
          >
            <Button
              variant="outlined"
              disabled={timeControl === "bullet"}
              onClick={() => setTimeControl("bullet")}
            >
              Bullet
            </Button>
            <Button
              variant="outlined"
              disabled={timeControl === "blitz"}
              onClick={() => setTimeControl("blitz")}
            >
              Blitz
            </Button>
            <Button
              variant="outlined"
              disabled={timeControl === "rapid"}
              onClick={() => setTimeControl("rapid")}
            >
              Rapid
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} md={4}>
          <h1>Win Probability:</h1>
        </Grid>
        <Grid item xs={6} md={4} align="center">
          <h1>{utils.WinProbabilityCalculator(1500, 1600)}%</h1>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        spacing={4}
        sx={{ width: "100%" }}
        justifyContent="center"
      >
        <Button variant="outlined">Share</Button>
        <Button variant="outlined">Compare</Button>
      </Stack>
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
