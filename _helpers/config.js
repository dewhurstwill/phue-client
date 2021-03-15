const baseItems = [
  'lights',
  'schedules',
  'groups'
];

module.exports = {
  requiredEnvironmentVariables: {
    HUE_HUB_IP: 'string', 
    HUE_HUB_USERNAME: 'string',
  },
  validItems: {
    getAll: [ 'config', ...baseItems ],
    getOneById: [ ...baseItems ],
    updateOne: [ 'config', ...baseItems ],
  },
  hue: {
    protocol: 'http',
    ip: process.env.HUE_HUB_IP || '',
    user: process.env.HUE_HUB_USERNAME || '',
  }
};