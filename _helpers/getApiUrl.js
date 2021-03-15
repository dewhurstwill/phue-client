const {
  checkForEnvironmentVariables
} = require('./useValidation');
const config = require('./config');

function getApiUrl() {
  checkForEnvironmentVariables();
  const { protocol, ip, user } = config.hue;
  const url = `${protocol}://${ip}/api/${user}`;
  return url;
}

module.exports = {
  getApiUrl
}