const config = require('./config');

function checkForEnvironmentVariables() {
  const { requiredEnvironmentVariables } = config;

  // Filter environment variables to check if all required keys are present
  const unsetKeys = Object.keys(requiredEnvironmentVariables).filter(
    (key) => (
      !process.env[key] ||
      (typeof process.env[key] === 'undefined') ||
      (typeof process.env[key] !== requiredEnvironmentVariables[key])
    )
  );

  // Throw an error if there are any unset required keys
  if (unsetKeys.length > 0) {
    const errorKeyText = unsetKeys.map(key => {
      return `${key}: ${requiredEnvironmentVariables[key]}`
    }).join(', ');
    console.error(`\nRequired environment variables are not set: [${errorKeyText || ''}]\n`);
    throw new Error('Exiting');
  }
}

function validateItem(functionName, item) {
  const {
    validItems
  } = config;
  if (!( item in validItems[functionName] )) {
    throw new Error(`\n\n${item} is not a valid item\nOnly ${validItems[functionName].join(', ')} are valid.\n\n`);
  }
}

module.exports = {
  checkForEnvironmentVariables,
  validateItem
}