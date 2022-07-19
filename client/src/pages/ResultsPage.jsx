import { Button, Container, Grid, Stack } from "@mui/material";
import { PaddingY } from "../components/Spacing";
import ResultsRadarChart from "../components/ResultsRadarChart";
import ResultsBarChart from "../components/ResultsBarChart";
import * as utils from "../utils/utils";
import "./ResultsPage.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStats } from "../utils/apiRequests";

function ResultsPage() {
  const { username, otherUsername } = useParams();
  const [timeControl, setTimeControl] = useState("bullet");
  const [apiData, setApiData] = useState({});
  const [graphData, setGraphData] = useState(undefined);

  useEffect(() => {
    getStats(username, otherUsername).then(d => setApiData(d));
  }, []);

  useEffect(() => {
    setGraphData(utils.formatStats(apiData, timeControl));
  }, [apiData, timeControl]);

  return (
    <Container maxWidth="xl">
      <h1>Results Page</h1>
      <Grid container>
        <Grid item xs={6} sm={6} md={1}>
          <Stack>
            <PaddingY padding={"15vh"} />
            <div className="data-list">
              <p>Current Rating</p>
            </div>
            <div className="data-list">
              <p>Highest Rating</p>
            </div>
            <div className="data-list">
              <p>Win/Loss %</p>
            </div>
            <div className="data-list">
              <p>Total Games</p>
            </div>
            <div className="data-list">
              <p>Tactics Rating</p>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <ProfileStack
            apiData={apiData.currUserData}
            timeControl={timeControl}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} align="center">
          <div className="chart-container">
            <ResultsRadarChart usernames={["Dani", "Adam"]} stats={graphData} />
          </div>
          {Array.from(Array(5).keys()).map(index => {
            const currStats = graphData ? graphData[0][index] : 0;
            const otherStats = graphData ? graphData[1][index] : 0;
            return (
              <div className="bar-container" key={index}>
                <ResultsBarChart
                  label="ELO rating"
                  stats={[[currStats], [otherStats]]}
                />
              </div>
            );
          })}
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <ProfileStack
            apiData={apiData.otherUserData}
            timeControl={timeControl}
          />
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
          <h1>
            {apiData
              ? utils.WinProbabilityCalculator(apiData, timeControl)
              : 0.0}
            %
          </h1>
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

function ProfileStack({ apiData, timeControl }) {
  return (
    <Stack align="center">
      <Stack sx={{ height: "30vh" }} alignItems="center">
        <img src="/chesstats_logo.png" alt="Avatar" className="profile-logo" />
        <h2>{apiData ? apiData.username : "loading..."}</h2>
      </Stack>
      <div className="data-list">
        <p>
          {apiData ? apiData[`${timeControl}`]["currentRating"] : "loading..."}
        </p>
      </div>
      <div className="data-list">
        <p>
          {apiData ? apiData[`${timeControl}`]["bestRating"] : "loading..."}
        </p>
      </div>

      <div className="data-list">
        <p>
          {apiData
            ? `${utils.round(
                apiData[`${timeControl}`]["winPercentage"] * 100,
                2
              )}%`
            : "loading..."}
        </p>
      </div>
      <div className="data-list">
        <p>
          {apiData ? apiData[`${timeControl}`]["totalGames"] : "loading..."}
        </p>
      </div>
      <div className="data-list">
        <p>
          {apiData ? apiData["tactics"]["highest"]["rating"] : "loading..."}
        </p>
      </div>
    </Stack>
  );
}

export default ResultsPage;
