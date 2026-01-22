const http = require('http');

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS:`, res.headers);
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('BODY:', data);
    process.exit(0);
  });
});

req.on('error', (e) => {
  console.error(`ERROR: ${e.message}`);
  process.exit(1);
});

const body = JSON.stringify({
  name: 'Test User',
  email: 'test@test.com',
  message: 'Hello World'
});

console.log('Sending request...');
req.write(body);
req.end();
