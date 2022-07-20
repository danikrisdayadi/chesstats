import {
  Button,
  Container,
  Grid,
  Stack,
  Divider,
  Dialog,
  TextField,
} from "@mui/material";
import { useScreenshot, createFileName } from "use-react-screenshot";
import React, { createRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStats } from "../utils/apiRequests";
import { NormalButton, SuccessButton } from "../utils/utils";
import { PaddingY } from "../components/Spacing";
import ResultsRadarChart from "../components/ResultsRadarChart";
import ResultsBarChart from "../components/ResultsBarChart";
import * as utils from "../utils/utils";

import "./ResultsPage.scss";

function ResultsPage() {
  const { username, otherUsername } = useParams();
  const [timeControl, setTimeControl] = useState("bullet");
  const [apiData, setApiData] = useState({});
  const [graphData, setGraphData] = useState(undefined);
  const [open, setOpen] = useState(false);

  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const getImage = () => {
    takeScreenShot(ref.current);
    setOpen(true);
  };

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  useEffect(() => {
    getStats(username, otherUsername).then(d => setApiData(d));
  }, [username, otherUsername]);

  useEffect(() => {
    setGraphData(utils.formatStats(apiData, timeControl));
  }, [apiData, timeControl]);

  return (
    <Container maxWidth="xl">
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        maxWidth="sm"
      >
        <Container align="center" className="dialog-container">
          <PaddingY padding={"2vh"} />
          <h3 style={{ margin: 0 }}>Share your Chesstats!</h3>
          <p>
            Either share by downloading a screenshot, or using the result URL
          </p>
          <PaddingY padding={"1vh"} />

          <Stack alignItems="center" spacing={3}>
            <img
              src={image}
              alt={"ScreenShot"}
              className="screenshot-img"
            ></img>
            <NormalButton
              sx={{ padding: "10px 40px" }}
              onClick={downloadScreenshot}
            >
              Download
            </NormalButton>
          </Stack>
          <PaddingY padding={"1vh"} />
          <Divider className="divider">or</Divider>
          <PaddingY padding={"1vh"} />

          <Grid container alignItems="center" columnSpacing={1}>
            <Grid item xs={9} sm={10} justifyContent="flex-end">
              <TextField
                fullWidth
                variant="filled"
                InputProps={{
                  readOnly: true,
                }}
                defaultValue={`${window.location.href}`}
                label="Share link"
              />
            </Grid>
            <Grid item xs={3} sm={2}>
              <Button size="large" sx={{ padding: "15px", width: "100%" }}>
                Copy
              </Button>
            </Grid>
          </Grid>
          <PaddingY padding={"2vh"} />
        </Container>
      </Dialog>

      <div ref={ref} className="screenshot-div">
        <Container align="center">
          <h2>Chesstats.co Results</h2>
          <PaddingY padding={"2vh"} />
        </Container>
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
              <ResultsRadarChart
                users={[apiData.currUserData, apiData.otherUserData]}
                stats={graphData}
              />
            </div>
            {Array.from(Array(5).keys()).map(index => {
              const currStats = graphData ? graphData[0][index] : 0;
              const otherStats = graphData ? graphData[1][index] : 0;
              return (
                <div className="bar-container" key={index}>
                  <ResultsBarChart
                    label=""
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
        <Grid container alignItems="center">
          <Grid item xs={6} md={4}>
            <h3>Win Probability:</h3>
          </Grid>
          <Grid item xs={6} md={4} align="center">
            <h1>
              {apiData
                ? utils.WinProbabilityCalculator(apiData, timeControl)
                : "0.00"}
              %
            </h1>
          </Grid>
        </Grid>
      </div>
      <Stack
        direction="row"
        spacing={3}
        sx={{ width: "100%" }}
        justifyContent="center"
      >
        <NormalButton sx={{ padding: "10px 40px" }} onClick={getImage}>
          Share
        </NormalButton>
        <SuccessButton sx={{ padding: "10px 20px" }}>
          Compare another user
        </SuccessButton>
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
        <p>{apiData ? apiData["tactics"] : "loading..."}</p>
      </div>
    </Stack>
  );
}

export default ResultsPage;
