const fetch = require('node-fetch'); // or use axios

async function Log(stack, level, pkg, message) {
  const logData = {
    stack: stack.toLowerCase(),
    level: level.toLowerCase(),
    package: pkg.toLowerCase(),
    message: message
  };

  try {
    const response = await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // Add Authorization header here if needed
      },
      body: JSON.stringify(logData)
    });

    if (!response.ok) {
      console.error('Failed to log:', response.statusText);
    }
  } catch (error) {
    console.error('Error while logging:', error.message);
  }
}

module.exports = Log;

