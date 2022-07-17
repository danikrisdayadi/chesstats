import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { PaddingY } from "../components/Spacing";

function ComparePage() {
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
        <h1>Enter Chess.com Username</h1>
        <PaddingY padding={"5vh"} />
        <Container>
          <Grid container>
            <Grid item xs={6} sm={10} justifyContent="flex-end">
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

export default ComparePage;
