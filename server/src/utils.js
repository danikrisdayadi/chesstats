export function formatUserData(userData) {
  const bulletTotalGames = userData.chess_bullet.record.win + userData.chess_bullet.record.loss + userData.chess_bullet.record.draw;
  const blitzTotalGames = userData.chess_blitz.record.win + userData.chess_blitz.record.loss + userData.chess_blitz.record.draw;
  const rapidTotalGames = userData.chess_rapid.record.win + userData.chess_rapid.record.loss + userData.chess_rapid.record.draw;

  return {
    bullet: {
      currentRating: userData.chess_bullet.last.rating,
      bestRating: userData.chess_bullet.best.rating,
      winPercentage: userData.chess_bullet.record.win / bulletTotalGames,
      totalGames: bulletTotalGames
    },
    blitz: {
      currentRating: userData.chess_blitz.last.rating,
      bestRating: userData.chess_blitz.best.rating,
      record: userData.chess_blitz.record,
      winPercentage: userData.chess_blitz.record.win / blitzTotalGames,
      totalGames: blitzTotalGames
    },
    rapid: {
      currentRating: userData.chess_rapid.last.rating,
      bestRating: userData.chess_rapid.best.rating,
      record: userData.chess_rapid.record,
      winPercentage: userData.chess_rapid.record.win / rapidTotalGames,
      totalGames: rapidTotalGames
    },
    tactics: userData.tactics,
  };

}