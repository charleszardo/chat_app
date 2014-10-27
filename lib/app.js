var http = require("http")
  , url = require("url")
  , querystring = require("querystring");

var server = http.createServer();

server.on("request", function (req, res) {
  var parsedUrl = url.parse(req.url);
  var parsedQuery = querystring.parse(parsedUrl.query);

  res.write(JSON.stringify(parsedUrl));
  res.write("\n");
  res.write(JSON.stringify(parsedQuery));
  res.write("\n")
  res.write("THIS WAS HOTLOADED");

  res.end();
});

server.listen(3000);