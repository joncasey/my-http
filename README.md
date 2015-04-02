# my-http

Provides helper functions for mundane http/https tasks.

```node

var http = require('my-http')

// saves "all.json" to current working directory
http.download('http://nodejs.org/api/all.json')

// saves "all-2015.json" to current working directory
http.download('http://nodejs.org/api/all.json', 'all-2015.json')

http.readText('http://nodejs.org/api/all.json', function (text, url) {
  console.log(url + ' = ' + text.length)
})

```

