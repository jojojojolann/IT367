// redisClient.js
require('dotenv').config();
const redis = require("redis");

const client = redis.createClient({ url: process.env.REDIS_URL });

client.on("error", (error) => console.error(`Error: ${error}`));

client.connect();

async function getKey(key) {
  const value = await client.get(key);
  return value;
}

module.exports = { getKey };
