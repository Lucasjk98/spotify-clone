


export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "7eb568ef5a6444889d2fb24d8dfdf70b"

const scopes = [
    "user-read-curretly-playing", 
    "user-read-recently-played", 
    "user-read-playback-state", 
]
 
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;