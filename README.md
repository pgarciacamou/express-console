# express-console
Grunt server with express that prints to the console.

# How to use:

  1. Clone this repo
  2. npm install
  3. node server.js

Then, you need to do a XHR/AJAX request:

You can see an example code [here](https://gist.github.com/pgarciacamou/82e49e1d11c4310093dd)
```JavaScript
  var json = {
    data: ...
  };
  var httpRequest = new XMLHttpRequest();
  httpRequest.open("POST", "URL", true);
  httpRequest.setRequestHeader("Content-Type", "application/json");
  httpRequest.send(JSON.stringify(json));
```
