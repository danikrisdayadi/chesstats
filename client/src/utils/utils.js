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

export function WinProbabilityCalculator(elo1, elo2) {
  return round(Math.abs(elo1 - elo2) / (elo1) * 100, 2);
}

function round(num, places) {
  return +(Math.round(num + "e+" + places) + "e-" + places);
}

export const ColorButton = styled(Button)(() => ({
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
  backgroundColor: "rgba(0,0,0,0)",
  border: '1px solid',
  borderColor: '#0063cc',
  '&:hover': {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
}));
