import { Container, Stack, Button } from "@mui/material";
import { PaddingY } from "../components/Spacing";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./AboutPage.scss";

function AboutPage() {
  return (
    <Container maxWidth="md">
      <h1>About Chesstats</h1>
      <p>
        Chesstats is a platform designed for chess.com users to be able to
        compare their statistics with one another. It is built as a summer
        project by Dani, a Year 4 Undergraduate student studying in National
        University of Singapore (NUS). It is built using ReactJS and Material
        UI, amongst many other libraries used.
      </p>
      <p>
        Chesstats was born on a bus ride from the National University of
        Singapore (NUS) canteen to the Hostel I lived in. The initial idea was
        for it to conduct a deep analysis to one’s game and compare it with
        other players. However, after some digging, the chess.com API was rather
        limited to going deep into game analysis, and hence the project was
        scoped down to only include simple statistics you see currently being
        shown.
      </p>
      <p>
        If you have any feature suggestions or bug reports, please fill in the
        form below! If you would like to connect and have a chat, you can find
        my LinkedIn below!
      </p>

      <Button
        target="_blank"
        href="https://forms.gle/DpGcNDidou9xpPSJ6"
        variant="outlined"
        size="large"
      >
        Feedback Form
      </Button>
      <Button
        target="_blank"
        href="https://www.linkedin.com/in/dani-purwadi-a7bb70146/"
      >
        <LinkedInIcon fontSize="large" color="primary" />
      </Button>

      <h1>About the Developer</h1>
      <Stack direction="row" spacing={5}>
        <img src="/dani.jpg" alt={"ScreenShot"} className="profile-img"></img>
        <div>
          <p>
            Dani is a Year 4 Mechanical Engineering major studying at National
            University of Singapore (NUS). Despite his engineering major, he has
            been in the developer role ever since his first internship with
            Yonah.
          </p>
          <p>
            He currently lives in NUS and spends his spare time either coding or
            sleeping.
          </p>
        </div>
      </Stack>
      <PaddingY padding={"5vh"} />
    </Container>
  );
}

export default AboutPage;
