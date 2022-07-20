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

export function WinProbabilityCalculator(apiData, timeControl) {
  if (apiData?.currUserData === undefined) {
    return;
  }

  const currUserData = apiData.currUserData[timeControl].currentRating;
  const otherUserData = apiData.otherUserData[timeControl].currentRating;

  const diff = currUserData - otherUserData;
  const calc = 1 / (1 + 10 ** (-diff / 400));
  return round(calc * 100, 2);
}

export function round(num, places) {
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

export const NormalButton = styled(Button)(() => ({
  color: "#fff",
  textTransform: 'none',
  backgroundColor: colors.body,
  '&:hover': {
    backgroundColor: colors.theme,
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

export function formatUserData(userData, username) {
  const bulletTotalGames = (userData?.chess_bullet?.record?.win || 0) + (userData?.chess_bullet?.record?.loss || 0) + (userData?.chess_bullet?.record?.draw || 0);
  const blitzTotalGames = (userData?.chess_blitz?.record?.win || 0) + (userData?.chess_blitz?.record?.loss || 0) + (userData?.chess_blitz?.record?.draw || 0);
  const rapidTotalGames = (userData?.chess_rapid?.record?.win || 0) + (userData?.chess_rapid?.record?.loss || 0) + (userData?.chess_rapid?.record?.draw || 0);

  return {
    username: username,
    bullet: {
      currentRating: userData?.chess_bullet?.last?.rating || 0,
      bestRating: userData?.chess_bullet?.best?.rating || 0,
      winPercentage: (userData?.chess_bullet?.record?.win || 0) / Math.max(bulletTotalGames, 1),
      totalGames: bulletTotalGames
    },
    blitz: {
      currentRating: userData?.chess_blitz?.last?.rating || 0,
      bestRating: userData?.chess_blitz?.best?.rating || 0,
      record: userData?.chess_blitz?.record || 0,
      winPercentage: (userData?.chess_blitz?.record?.win || 0) / Math.max(blitzTotalGames, 1),
      totalGames: blitzTotalGames
    },
    rapid: {
      currentRating: userData?.chess_rapid?.last?.rating || 0,
      bestRating: userData?.chess_rapid?.best?.rating || 0,
      record: userData?.chess_rapid?.record || 0,
      winPercentage: (userData?.chess_rapid?.record?.win || 0) / Math.max(rapidTotalGames, 1),
      totalGames: rapidTotalGames
    },
    tactics: userData?.tactics?.highest?.rating || 0,
  };
}

export function formatStats(apiData, timeControl) {
  if (apiData?.currUserData === undefined) {
    return;
  }

  const maxRating = 3000;
  const maxTactics = 3500;
  const currUserData = apiData.currUserData[timeControl];
  const otherUserData = apiData.otherUserData[timeControl];
  return [[
    currUserData.currentRating / maxRating,
    currUserData.bestRating / maxRating,
    currUserData.winPercentage,
    currUserData.totalGames / Math.max(currUserData.totalGames, otherUserData.totalGames),
    (apiData.currUserData["tactics"]) / maxTactics,
  ],
  [
    otherUserData.currentRating / maxRating,
    otherUserData.bestRating / maxRating,
    otherUserData.winPercentage,
    otherUserData.totalGames / Math.max(currUserData.totalGames, otherUserData.totalGames),
    (apiData.otherUserData["tactics"]) / maxTactics,
  ],
  ];
}