// store variables across files

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import colors from '../styles/_colors.scss';

export const chartGreen = "rgb(173, 193, 120)";
export const chartGreenBg = "rgba(173, 193, 120, 0.2)";
export const chartRed = "rgb(255, 99, 132)";
export const chartRedBg = "rgba(255, 99, 132, 0.2)";
export const chartGrey = "rgba(98, 97, 95, 0.5)";
export const chartGreyBg = "rgb(98, 97, 95, 0.2)";
export const chartBody = "rgb(169, 132, 103)";
export const chartBodyBg = "rgba(169, 132, 103, 0.2)";
export const transparent = "rgba(0,0,0,0)";

export function WinProbabilityCalculator(elo1, elo2) {
  return round(Math.abs(elo1 - elo2) / (elo1) * 100, 2);
}

function round(num, places) {
  return +(Math.round(num + "e+" + places) + "e-" + places);
}

export function hexToRGB(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r},${g},${b},${alpha})`;
  } else {
    return `rgb(${r},${g},${b})`;
  }
}

export const SuccessButton = styled(Button)(() => ({
  color: "#fff",
  textTransform: 'none',
  backgroundColor: colors.cta,
  '&:hover': {
    backgroundColor: colors.darkCta,
  },
}));

export const FeedbackButton = styled(Button)(() => ({
  color: "#fff",
  textTransform: 'none',
  backgroundColor: transparent,
  border: '1px solid',
  borderColor: colors.whiteYellow,
  '&:hover': {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderColor: hexToRGB(colors.whiteYellow, 0.7)
  },
}));

export const AccountButton = styled(Button)(() => ({
  borderRadius: "10px",
  textTransform: 'none',
  fontWeight: "normal",
  backgroundColor: transparent,
  '&:hover': {
    backgroundColor: transparent,
  },
  '&:focus': {
    color: hexToRGB(colors.theme, 0.2),
  },
}));