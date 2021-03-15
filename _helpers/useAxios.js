const axios = require('axios');

async function useAxios(method, url, headers, body) {
  if (!body) {
    return await axios({
      method,
      url,
      headers,
      body
    })
    .then(response => response?.data)
    .catch(console.error);
  }
}

module.exports = {
  useAxios
};
