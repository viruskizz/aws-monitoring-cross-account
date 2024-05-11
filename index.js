module.exports.health = async (event) => {
  const status = isHealthy();
  const data = {
    message: status ? 'healthy' : 'unhealty',
    status,
  }
  console.log(data);
  if (event.source === 'aws.events' && !status) {
    throw new Error('Unhealthy')
  }
  return {
    statusCode: status ? 200 : 500,
    body: JSON.stringify(data, null, 2),
  }
};

function isHealthy() {
  const BASE = process.env.HEALTH_PERCENT || 50;
  const MAX = 100;
  const rand = Math.floor(Math.random() * MAX);
  console.log(`Health Percentage: ${rand}/${BASE}`);
  return rand < BASE;
}
