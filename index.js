module.exports.health = async (event) => {
  const status = isHealthy();
  const data = {
    message: status ? 'healthy' : 'unhealty',
    status,
  }
  console.log(data)
  return response(data);
};

function isHealthy() {
  const BASE = process.env.HEALTH_PERCENT || 50;
  const MAX = 100;
  const rand = Math.floor(Math.random() * MAX);
  console.log(`Health Percentage: ${rand}/${BASE}`);
  return rand < BASE;
}

function response(data) {
  return {
    statusCode: 200,
    body: JSON.stringify(data, null, 2),
  }
}
