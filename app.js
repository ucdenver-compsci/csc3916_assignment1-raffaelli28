// var server = require("http").createServer();

// This part has been updated in the walk through video posted by the instructor
var express = require('express')
var bodyParser = require('body-parser')
// var http = require('http')

// Creating the app
var app = express()

app.use(bodyParser.text({
    type: function(req){
        return 'text';
    }
}))


app.post('/', (req, res) => {
    console.log(req.body)
    res = res.status(200)
    var contentType = req.get('Content-Type');

    // If we have a content type
    if (contentType) {
        console.log('Content Type: ' + contentType);
        res = res.type(contentType)
    }
    res.send(req.body)
})


app.listen(process.env.PORT || 8080);

// server.on("request", (request, response) => {
//     var body = [];
//     request.on("data", chunk => {
//         body.push(chunk);
//     });
//     request
//         .on("end", () => {
//             let bodyString = body.concat().toString();
//             console.log(bodyString);
//             response.end(bodyString);
//         })
//         .on("error", () => {
//             response.statusCode = 400;
//             response.end();
//         });
//     response.on("error", err => {
//         console.error(err);
//     });
// });
// server.listen(process.env.PORT || 8008, () => {
//     console.log("Server listening at 8008");
// });

module.exports = app; // for testing

//curl -d "echo" -H "Content-Type: text" -X POST http://localhost:8008
