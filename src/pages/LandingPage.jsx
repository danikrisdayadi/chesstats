import { Avatar, Container, Divider, Stack, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { PaddingY } from "../components/Spacing";
import { SuccessButton, FeedbackButton, AccountButton } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";

function LandingPage() {
  const navigate = useNavigate();
  const featuredAccounts = [
    {
      profilePicture:
        "https://images.chesscomfiles.com/uploads/v1/user/15448422.90503d66.200x200o.f323efa57fd0.jpeg",
      username: "Hikaru",
      name: "Hikaru Nakamura",
    },
    {
      profilePicture:
        "https://images.chesscomfiles.com/uploads/v1/user/33945736.5f6fc770.200x200o.23a404f808f9.jpeg",
      username: "GothamChess",
      name: "Levy Rozman",
    },
    {
      profilePicture:
        "https://images.chesscomfiles.com/uploads/v1/user/3889224.063b7e6f.200x200o.1c673340f1d1.jpeg",
      username: "MagnusCarlsen",
      name: "Magnus Carlsen",
    },
    {
      profilePicture:
        "https://images.chesscomfiles.com/uploads/v1/user/28583276.26b0cd3b.160x160o.fcbeec9a680e.jpeg",
      username: "AlexandraBotez",
      name: "Andrea Botez",
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
        <SuccessButton
          sx={{ padding: "12px 50px" }}
          onClick={() => navigate("/compare")}
        >
          Start Comparing!
        </SuccessButton>
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
