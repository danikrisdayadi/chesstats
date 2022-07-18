import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { PaddingY } from "../components/Spacing";

function SharePage() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      align="center"
      justifyContent="center"
      sx={{ height: "92vh" }}
    >
      <Paper
        elevation={5}
        sx={{
          backgroundColor: "#F3F1E8",
          minWidth: "fit-content",
          width: "50vw",
          maxWidth: "90vw",
        }}
      >
        <PaddingY padding={"5vh"} />
        <h1>Start Comparing!</h1>
        <p>
          To start comparing, either share your profile link or input another
          person’s username!
        </p>
        <PaddingY padding={"2vh"} />

        <Container>
          <Grid container>
            <Grid item xs={6} sm={2} justifyContent="flex-end">
              Share your link
            </Grid>

            <Grid item xs={6} sm={8} justifyContent="flex-end">
              <TextField
                fullWidth
                id="filled-read-only-input"
                variant="filled"
                InputProps={{
                  readOnly: true,
                }}
                defaultValue="Hello World"
                label="Share link"
              />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Button>Copy</Button>
            </Grid>
          </Grid>
        </Container>
        <PaddingY padding={"2vh"} />
        <Divider style={{ width: "80%" }}>or</Divider>
        <PaddingY padding={"2vh"} />

        <Container>
          <Grid container>
            <Grid item xs={6} sm={2} justifyContent="flex-end">
              Enter Username
            </Grid>
            <Grid item xs={6} sm={8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Button>Enter</Button>
            </Grid>
          </Grid>
        </Container>

        <PaddingY padding={"5vh"} />
      </Paper>
    </Grid>
  );
}

export default SharePage;
