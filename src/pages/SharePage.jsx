import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Grow,
} from "@mui/material";
import { PaddingY } from "../components/Spacing";
import { SuccessButton } from "../utils/utils";
import CopyToClipboard from "../components/CopyToClipboard";

import "./SharePage.scss";

function SharePage() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [otherUsername, setOtherUsername] = useState("");
  const [validity, setValidity] = useState(true);
  const [helperText, setHelperText] = useState("");

  const handleClick = () => {
    if (otherUsername.length > 0) {
      navigate(`/compare/${username}/${otherUsername}`);
    } else {
      setHelperText("Username cannot be blank");
      setValidity(false);
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className="grid"
    >
      <Grid item xs={11} sm={8} md={6}>
        <Grow in={true} timeout={500}>
          <Paper elevation={5} align="center" className="paper">
            <Container maxWidth="md">
              <PaddingY padding={"3vh"} />
              <img
                src="/chesstats_navbar_logo.png"
                alt="logo"
                className="logo"
              />
              <h2 style={{ marginBottom: 0 }}>Hi {username}!</h2>
              <div className="link">
                <a href="/relogin">Not you?</a>
              </div>

              <p style={{ width: "100%" }}>
                Compare by sharing your chesstats link or input another person's
                chess.com username!
              </p>
              <PaddingY padding={"1vh"} />

              <Container maxWidth="md">
                <CopyToClipboard
                  text={`${window.location.href.substring(
                    0,
                    window.location.href.indexOf("compare")
                  )}share/${username}`}
                />
              </Container>
              <PaddingY padding={"2vh"} />
              <Divider className="divider">or</Divider>
              <PaddingY padding={"2vh"} />

              <Container maxWidth="md">
                <Grid container columnSpacing={1}>
                  <Grid item xs={9} sm={10}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Enter Username"
                      variant="outlined"
                      error={!validity}
                      helperText={helperText}
                      onChange={event => setOtherUsername(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={3} sm={2}>
                    <SuccessButton
                      sx={{ padding: "15px", width: "100%" }}
                      onClick={handleClick}
                    >
                      Submit
                    </SuccessButton>
                  </Grid>
                </Grid>
              </Container>
              <PaddingY padding={"5vh"} />
            </Container>
          </Paper>
        </Grow>
      </Grid>
    </Grid>
  );
}

export default SharePage;
