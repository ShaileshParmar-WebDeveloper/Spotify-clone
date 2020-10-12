// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// it will redirect to spotify app for authentication
export const authEndpoint = "https://accounts.spotify.com/authorize";

// once user is authorize it will send back to this URL
const redirectUri = "http://localhost:3000/";

const clientId = "9f106a66b6a9465eb6432975e94f2093";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
