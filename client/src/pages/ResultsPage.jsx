import { Container, Grid, Stack } from "@mui/material";
import "./ResultsPage.scss";
function ResultsPage() {
  return (
    <Container align="center" maxWidth="xl">
      <h1>Results Page</h1>
      <ProfileStack />
      <Grid container></Grid>
    </Container>
  );
}

function ProfileStack() {
  return (
    <Stack>
      <img src="/chesstats_logo.png" alt="Avatar" className="profile-logo" />
      <h2>Dani Purwadi</h2>
    </Stack>
  );
}

export default ResultsPage;
