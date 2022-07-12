import fetch from 'node-fetch';

export async function getStats(req, res) {
  try {
    const user1 = req.params.username1;
    const user2 = req.params.username2;

    // fetch stats for both player
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json("Successful request!");
  } catch (err) {
    res.statusCode = 404;
    res.send(err);
  }

}

async function getChessData(username) {
  try {
    const response = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
  } catch (error) {
    return error;
  }
}
