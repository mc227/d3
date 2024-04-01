const http = require('http');

function ping(url) {
  const options = {
    method: 'HEAD',
  };
  http
    .request(url, options, (response) => {
      console.log(`${url} is ${response.statusCode === 200 ? 'up' : 'down'}`);
    })
    .on('error', (error) => {
      console.error(`Error: ${error.message}`);
    })
    .end();
}

ping('https://www.google.com');
