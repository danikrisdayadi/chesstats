import fetch from 'node-fetch';

export async function getStats(req, res) {
  try {
    const user1 = req.params.username1;
    const user2 = req.params.username2;

    const user1Data = await getChessData(user1);
    const user2Data = await getChessData(user2);

    const response = {
      user1Data,
      user2Data
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(response);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }

}

async function getChessData(username) {
  try {
    const response = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
    return await response.json();
  } catch (error) {
    return error;
  }
}
