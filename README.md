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

## Using a demo console
You can add this script to your demos **before the scripts you might want to use this in**
```HTML
<script type="text/javascript" src="//raw.githubusercontent.com/pgarciacamou/express-console/master/console.js"></script>
<script type="text/javascript">
  // @example
  var consArr = new Console({
    localhost: "10.0.1.8",
    route: "array"
  });
</script>
```