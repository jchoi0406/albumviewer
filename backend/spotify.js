import axios from "axios";


const client_id = '24311732919a4aebb1a1a63c2fa3f374';
const client_secret = 'b01fd5ea2c2346a7bd9aec0e8a0d6f9a';

const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
        "Content-Type": "application/x-www-form-urlencoded",
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

export function authorize() {
  return new Promise((resolve, reject) => {  // this ensures i can return the token in the .then() 
    axios
      .post(authOptions.url, null, {
        headers: authOptions.headers,
        params: authOptions.form,
      })
      .then((response) => {
        const token = response.data.access_token;
        resolve(token); // Resolve the promise with the token
      })
      .catch((error) => {
        reject(error); // Reject the promise with the error
      });
  });
}

export async function searchForAlbum(albumName) {
  const token = await authorize();
  const BASE_URL = 'https://api.spotify.com/v1/search?q=';
  const query = `${albumName}&type=album&limit=5`;
  const header = {'Authorization': 'Bearer ' + token}
  try {
    const response = await axios.get(BASE_URL + query, {
      headers: header
    });
    return response.data['albums'];
  } catch (error) {
    console.log("Error");
    return null;
  }
}