const { useAxios } = require('./_helpers/useAxios');
const { validateItem } = require('./_helpers/useValidation');

async function getAll(item) {
  validateItem();
  const hueUrl = getApiUrl();

  const res = await useAxios('GET', `${hueUrl}/${item}`, {}, {});
  const items = Object.keys(res).map(id => {
    const item = res[id];
    return {
      id,
      ...item
    }
  });

  return items;  
};

async function getOneById(item, id) {
  validateItem();
  const hueUrl = getApiUrl();

  const res = await useAxios('GET', `${hueUrl}/${item}/${id}`, {}, {});

  return res;
}

async function updateOne(item, id, body) {
  validateItem();
  const hueUrl = getApiUrl();

  let pathToAppend;
  if (item === 'lights') {
    pathToAppend = `${id}/state`;
  } else if (item === 'groups') {
    pathToAppend = `${id}/action`;
  } else if (item === 'schedules') {
    pathToAppend = `${id}`;
  }

  const res = await useAxios(
    'PUT', 
    `${hueUrl}/${item}/${pathToAppend || ''}`, 
    {
      'Content-Type': 'application/json'
    }, 
    body
  );

  return res;
}

// Exports
module.exports = {
  getAll,
  getOneById,
  updateOne,
};