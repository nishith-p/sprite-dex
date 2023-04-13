export const nodejs = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://${window.location.hostname}/api/v1/sprites',
    params: {
      pokemonName: 'pikachu'
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`;

export const python = `import requests

url = 'https://${window.location.hostname}/api/v1/sprites'
api_key = 'YOUR_API_KEY'
pokemonName: 'pikachu'

headers = {
    'Authorization': api_key
}

payload = {
  pokemonName: 'pikachu'
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`;
