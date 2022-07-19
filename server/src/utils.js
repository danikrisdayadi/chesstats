export function formatUserData(userData) {
  const bulletTotalGames = (userData?.chess_bullet?.record?.win || 0) + (userData?.chess_bullet?.record?.loss || 0) + (userData?.chess_bullet?.record?.draw || 0);
  const blitzTotalGames = (userData?.chess_blitz?.record?.win || 0) + (userData?.chess_blitz?.record?.loss || 0) + (userData?.chess_blitz?.record?.draw || 0);
  const rapidTotalGames = (userData?.chess_rapid?.record?.win || 0) + (userData?.chess_rapid?.record?.loss || 0) + (userData?.chess_rapid?.record?.draw || 0);

  return {
    bullet: {
      currentRating: userData?.chess_bullet?.last?.rating || 0,
      bestRating: userData?.chess_bullet?.best?.rating || 0,
      winPercentage: (userData?.chess_bullet?.record?.win || 0) / Math.min(bulletTotalGames, 1),
      totalGames: bulletTotalGames
    },
    blitz: {
      currentRating: userData?.chess_blitz?.last?.rating || 0,
      bestRating: userData?.chess_blitz?.best?.rating || 0,
      record: userData?.chess_blitz?.record || 0,
      winPercentage: (userData?.chess_blitz?.record?.win || 0) / Math.min(blitzTotalGames, 1),
      totalGames: blitzTotalGames
    },
    rapid: {
      currentRating: userData?.chess_rapid?.last?.rating || 0,
      bestRating: userData?.chess_rapid?.best?.rating || 0,
      record: userData?.chess_rapid?.record || 0,
      winPercentage: (userData?.chess_rapid?.record?.win || 0) / Math.min(rapidTotalGames, 1),
      totalGames: rapidTotalGames
    },
    tactics: userData?.tactics,
  };

}