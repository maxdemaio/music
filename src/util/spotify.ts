// Top 10 tracks over 4 week period
// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10`;

// For local development
// make sure you set them via CLI
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

export type ETrack = {
  ranking: number;
  songUrl: string;
  artist: string;
  title: string;
  albumUrls: string[];
};

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const getAccessToken = async () => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token || "",
      }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching access token", error);
    return {}; // Return an empty object or any other placeholder value
  }
};

export const getTopTracks = async () => {
  try {
    const { access_token } = await getAccessToken();
    const url = TOP_TRACKS_ENDPOINT;
    const payload = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    const res = await fetch(url, payload);

    if (!res.ok) {
      throw new Error(`Error fetching top tracks: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching top tracks", error);
    return []; // Return an empty array
  }
};
