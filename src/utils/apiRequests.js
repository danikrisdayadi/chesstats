import fetch from 'node-fetch';
import * as utils from "./utils.js";

export async function getStats(currUsername, otherUsername) {
  try {
    const currUserData = await getChessData(currUsername);
    const otherUserData = await getChessData(otherUsername);

    const response = {
      currUserData: utils.formatUserData(currUserData, currUsername),
      otherUserData: utils.formatUserData(otherUserData, otherUsername)
    };

    return response;
  } catch (err) {
    console.error(err);
    return err;
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
