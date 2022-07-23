import { Container, Stack, Button, Tooltip } from "@mui/material";
import { PaddingY } from "../components/Spacing";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FeedbackIcon from "@mui/icons-material/Feedback";
import "./AboutPage.scss";

function AboutPage() {
  return (
    <Container maxWidth="md" className="about-containers">
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
        Singapore (NUS) canteen to the Hostel Dani lived in. The initial idea
        was for it to conduct a deep analysis to one’s game and compare it with
        other players. However, after some digging, the chess.com API was rather
        limited to going deep into game analysis, and hence the project was
        scoped down to only include simple statistics you see currently being
        shown.
      </p>
      <p>
        If you have any feature suggestions or bug reports, please fill in the
        form at the bottom of the page! If you would like to connect and have a
        chat, you can find the Dani's linkedin below.
      </p>

      <h1>About the Developer</h1>
      <p>
        Dani is a Year 4 Mechanical Engineering major studying at National
        University of Singapore (NUS). Despite his engineering major, he has
        been in the developer role ever since his first internship with Yonah,
        where he developed a custom GUI for Yonah's Ground Control System. Since
        then, he has taken a broad range of roles, from being a Product Manager
        in Interseed, to the more recent Software Engineer role in Xfers
        Payments Team.
      </p>
      <p>
        He currently lives in NUS and spends his spare time either coding or
        sleeping.
      </p>
      <Stack direction="row" className="about-buttons">
        <Tooltip title="Feedback Form">
          <Button target="_blank" href="https://forms.gle/DpGcNDidou9xpPSJ6">
            <FeedbackIcon fontSize="large" color="success" />
          </Button>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <Button
            target="_blank"
            href="https://www.linkedin.com/in/dani-purwadi-a7bb70146/"
          >
            <LinkedInIcon fontSize="large" color="primary" />
          </Button>
        </Tooltip>
      </Stack>
      <PaddingY padding={"3vh"} />
    </Container>
  );
}

export default AboutPage;
