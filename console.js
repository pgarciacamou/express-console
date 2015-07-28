/**
* This console connects to a server and sends data to be printed.
*
* @note Server must allow CORS requests.
*
* @param options {Object}  Set of options to make the ajax requests.
*
* @example
* var consArr = new Console({
*   localhost: "10.0.1.8",
*   route: "array"
* });
*/
console.warn("Console class was added to the demo");
function Console(options){
  options = options || {};

  this.method = (options.method || "post").toUpperCase();
  this.port = options.port || 3000;
  this.route = "/" + (options.route || "");
  this.localhost = options.localhost || "localhost";
  this.dataType = options.dataType || "json";
  this.contentType = options.contentType || "application/json";
}
Console.prototype.log = function() {
  var json = {
    data: [].slice.call(arguments, 0)
  };
  var httpRequest = new XMLHttpRequest();
  httpRequest.open(this.method, "//" + this.localhost + ":" + this.port + this.route, true);
  httpRequest.setRequestHeader("Content-Type", "application/json");
  httpRequest.send(JSON.stringify(json));
};