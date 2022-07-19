import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { PaddingY } from "../components/Spacing";
import { SuccessButton } from "../utils/utils";

import "./SharePage.scss";

function SharePage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("blank");

  const handleClick = () => {
    navigate(`/compare/123/123`);
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className="grid"
    >
      <Grid item xs={11} sm={8} md={6}>
        <Paper elevation={5} align="center" className="paper">
          <PaddingY padding={"3vh"} />
          <img src="/chesstats_navbar_logo.png" alt="logo" className="logo" />
          <h2>Start Comparing!</h2>
          <p>
            To start comparing, either share your profile link or input another
            person's chess.com username!
          </p>
          <PaddingY padding={"2vh"} />

          <Container maxWidth="md">
            <Grid container alignItems="center" columnSpacing={1}>
              <Grid item xs={0} sm={1} />
              <Grid item xs={8} sm={8} justifyContent="flex-end">
                <TextField
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  defaultValue="Hello World"
                  label="Share link"
                />
              </Grid>
              <Grid item xs={3} sm={2}>
                <Button size="large" sx={{ padding: "15px", width: "100%" }}>
                  Copy
                </Button>
              </Grid>
              <Grid item xs={0} sm={1} />
            </Grid>
          </Container>
          <PaddingY padding={"2vh"} />
          <Divider className="divider">or</Divider>
          <PaddingY padding={"2vh"} />

          <Container maxWidth="md">
            <Grid container columnSpacing={1}>
              <Grid item xs={0} sm={1} />
              <Grid item xs={8} sm={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Enter Username"
                  variant="outlined"
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

export default SharePage;
