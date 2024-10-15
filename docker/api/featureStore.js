// featureStore.js
const { getKey } = require("./redisClient");

async function getFeatureState(feature) {
  const value = await getKey(feature);
  return value;
}

module.exports = { getFeatureState };
