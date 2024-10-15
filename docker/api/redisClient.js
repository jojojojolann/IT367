// redisClient.js
const redis = require("redis");

const client = redis.createClient({ url: "redis://localhost:6379" });

client.on("error", (error) => console.error(`Error : ${error}`));

client.connect();

async function getKey(key) {
  const value = await client.get(key);
  return value;
}

module.exports = { getKey };
