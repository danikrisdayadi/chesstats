import { Box } from "@mui/material";
import { React, useState } from "react";
import "./LoadingAnimation.scss";

function LoadingAnimation() {
  return (
    <div class="preloader">
      <div class="preloader__square"></div>
      <div class="preloader__square"></div>
      <div class="preloader__square"></div>
      <div></div>
    </div>
  );
}

export default LoadingAnimation;
