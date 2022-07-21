import { Avatar, Container, Divider, Stack, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { PaddingY } from "../components/Spacing";
import {
  SuccessButton,
  FeedbackButton,
  AccountButton,
  NormalButton,
} from "../utils/utils";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";

function LandingPage() {
  const navigate = useNavigate();
  const featuredAccounts = [
    {
      profilePicture: "/hikaru.jpg",
      username: "Hikaru",
      name: "Hikaru Nakamura",
    },
    {
      profilePicture: "levy.jpeg",
      username: "GothamChess",
      name: "Levy Rozman",
    },
    {
      profilePicture: "magnus.jpg",
      username: "MagnusCarlsen",
      name: "Magnus Carlsen",
    },
    {
      profilePicture: "/alexandra.jpg",
      username: "AlexandraBotez",
      name: "Alexandra Botez",
    },
  ];
  return (
    <div>
      <Container maxWidth="xl" align="center" className="main-container">
        <PaddingY padding={"5vh"} />

        <h1>Compare your Chess.com Statistics with others!</h1>
        <Box>
          <p>
            Chesstats allows you to compare basic statistics of your Chess.com
            account with other players. <br />
            Click below to start comparing with your friends or one of our
            featured accounts!
          </p>
        </Box>
        <PaddingY padding={"2vh"} />
        <Stack direction={"row"} justifyContent="center" spacing={4}>
          <SuccessButton
            sx={{ padding: "12px 20px" }}
            onClick={() => navigate("/others")}
          >
            Compare Other Players' Stats
          </SuccessButton>

          <NormalButton
            sx={{ padding: "12px 40px" }}
            onClick={() => navigate("/compare")}
          >
            Compare Your Stats
          </NormalButton>
        </Stack>
        <PaddingY padding={"3vh"} />

        <Divider className="divider">or</Divider>
        <PaddingY padding={"3vh"} />

        <p style={{ marginTop: 0 }}>
          Compare with one of featured Chess.com accounts!
        </p>
        <PaddingY padding={"2vh"} />
        <Container>
          <Grid container>
            {featuredAccounts.map((account, index) => (
              <Grid item xs={6} md={3} key={index}>
                <AccountButton
                  onClick={() => navigate(`/share/${account.username}`)}
                >
                  <Stack alignItems="center" className="stack">
                    <Avatar
                      alt={account.name}
                      src={`${account.profilePicture}`}
                      sx={{ width: "100px", height: "100px" }}
                    />
                    <p>{account.name}</p>
                  </Stack>
                </AccountButton>
              </Grid>
            ))}
          </Grid>
        </Container>
        <PaddingY padding={"5vh"} />
      </Container>
      <div className="about-container">
        <Container maxWidth="lg" align="center">
          <PaddingY padding={"2vh"} />
          <h1>About Chesstats</h1>
          <p>
            Chesstats is a simple summer holiday project to brush up some
            programming. If you would like to support the website or suggest
            improvements, do let the developers know using the form below!
          </p>
          <PaddingY padding={"2vh"} />
          <FeedbackButton
            sx={{ padding: "12px 50px" }}
            target="_blank"
            href="https://forms.gle/DpGcNDidou9xpPSJ6"
          >
            Feedback Form
          </FeedbackButton>
          <PaddingY padding={"5vh"} />
        </Container>
      </div>
    </div>
  );
}

export default LandingPage;
