var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type' : 'application/json'
};

var messages = [
  {
    username: 'Sheyda',
    message: 'learning curve is steep'
  }
];

var dummyData = {results: messages};

function sendMessages (response, dummyData, statusCode) {
  var statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(dummyData));
}

function collectData (request, callback) {
  var data = [];

  request.on('data', function(body) {
    data.push(chunk);
  });
  request.on() {
    callback(JSON.parse(data));
  }
}

var actions = {
  'GET': function(request, response) {
    sendMessages (response, dummyData);
  },
  'POST': function(request, response) {
    collectData(request, function(message) {
      return message;
    });
    sendMessages (response, dummyData, 201);
  },
  'OPTIONS': function(request, response) {
    // sendMessages (response, null);
  } 
};


var requestHandler = function(request, response) {

  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  
  var action = actions[request.method];
  if(action) {
    action(request, response);
  }
  else {
    //error
  }


};

module.exports.requestHandler = requestHandler;












/*
/*************************************************************
You should implement your request handler function in this file.
requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.
You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.
*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.
**************************************************************/

// var requestHandler = function(request, response) {
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  // console.log('Serving request type ' + request.method + ' for url ' + request.url);

  // The outgoing status.

  // var statusCode = 200;
  // if(request.method === 'POST') {
  //   statusCode =201;
  // }

  // See the note below about CORS headers.
  // var headers = defaultCorsHeaders;

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  // headers['Content-Type'] = 'text/plain';

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  // response.writeHead(statusCode, headers);

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
//   var dummyData = {results: [1,2,3]};
//   response.end(JSON.stringify(dummyData));
// };

// module.exports.requestHandler = requestHandler;

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
// var defaultCorsH




