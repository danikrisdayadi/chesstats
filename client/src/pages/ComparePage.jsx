import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { PaddingY } from "../components/Spacing";
import "./ComparePage.scss";

function ComparePage() {
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
          <PaddingY padding={"2vh"} />
          <Container>
            <Grid container>
              <Grid item xs={9} sm={10} justifyContent="flex-end">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} sm={2}>
                <Button>Enter</Button>
              </Grid>
            </Grid>
          </Container>
          <PaddingY padding={"5vh"} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ComparePage;
