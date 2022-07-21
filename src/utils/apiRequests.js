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

export async function getProfilePicture(currUsername, otherUsername) {
  try {
    const currProfile = await getProfile(currUsername);
    const otherProfile = await getProfile(otherUsername);

    return [currProfile?.avatar, otherProfile?.avatar];
  } catch (err) {
    console.error(err);
    return err;
  }
}

async function getChessData(username) {
  try {
    const response = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
    const jsonResponse = await response.json();

    return jsonResponse;
  } catch (error) {
    return error;
  }
}

async function getProfile(username) {
  try {
    const response = await fetch(`https://api.chess.com/pub/player/${username}`);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    return error;
  }

}

