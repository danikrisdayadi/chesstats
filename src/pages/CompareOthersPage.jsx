import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Grid, Paper, TextField, Grow } from "@mui/material";
import { PaddingY } from "../components/Spacing";
import { SuccessButton } from "../utils/utils";

import "./SharePage.scss";

function CompareOthersPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
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
              <img src="/chesstats_navbar_logo.png" alt="logo" />
              <h2 style={{ marginBottom: 0 }}>Compare Other Players</h2>

              <p style={{ width: "100%" }}>
                Please enter the usernames of players you would like to compare!
              </p>
              <PaddingY padding={"1vh"} />

              <Container maxWidth="md">
                <Grid container columnSpacing={1} rowSpacing={1}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="First player"
                      variant="outlined"
                      error={!validity}
                      helperText={helperText}
                      onChange={event => setUsername(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Second player"
                      variant="outlined"
                      error={!validity}
                      helperText={helperText}
                      onChange={event => setOtherUsername(event.target.value)}
                    />
                  </Grid>
                </Grid>
                <PaddingY padding={"1vh"} />

                <SuccessButton
                  sx={{ padding: "15px 50px" }}
                  onClick={handleClick}
                >
                  Submit
                </SuccessButton>
              </Container>
              <PaddingY padding={"5vh"} />
            </Container>
          </Paper>
        </Grow>
      </Grid>
    </Grid>
  );
}

export default CompareOthersPage;
