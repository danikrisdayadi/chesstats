import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Container, Grid, Paper, TextField } from "@mui/material";
import { PaddingY } from "../components/Spacing";
import { SuccessButton } from "../utils/utils";
import "./ComparePage.scss";
import { useState } from "react";

function ComparePage() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["username"]);
  const [username, setUsername] = useState(cookies.username);
  const [validity, setValidity] = useState(true);
  const [helperText, setHelperText] = useState("");

  const handleClick = () => {
    if (username.length > 0) {
      setCookie("username", username, { path: "/" });
      navigate(`/compare/${username}`);
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
        <Paper elevation={5} align="center" className="username-box">
          <PaddingY padding={"3vh"} />
          <img src="/chesstats_navbar_logo.png" alt="logo" className="logo" />
          <h2>Enter Chess.com Username</h2>
          <p>
            We noticed that we do not have your chess.com data. Please input
            your chess.com username below to continue
          </p>
          <PaddingY padding={"1vh"} />
          <Container maxWidth="md">
            <Grid container columnSpacing={1}>
              <Grid item xs={0} sm={1} />
              <Grid item xs={8} sm={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  error={!validity}
                  helperText={helperText}
                  defaultValue={username}
                  onChange={event => setUsername(event.target.value)}
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
              <Grid item xs={0} sm={1} />
            </Grid>
          </Container>
          <PaddingY padding={"5vh"} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ComparePage;
