if (typeof fetch !== 'function') {
    console.log('Fetch is not supported in this environment');
  } else {
    const apiKey = 'YEl2ZHlhiaSMXy4fey3qyN4ME';
    const apiEndpoint = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2';
  
    fetch(apiEndpoint, {
      headers: {
        'Authorization': 'Bearer ' + apiKey
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
  