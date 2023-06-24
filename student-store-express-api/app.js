// YOUR CODE HERE
const express = require("express");
const cors = require("cors");
const storeRoute = require ("./routes/storeRoutes")

const app = express();

//adds middleware
app.use(express.json());
app.use(cors()); // allows requests from different origins.
app.use("/store", storeRoute);


//defines a route for the root URL ("/") of the server.
app.get("/", function (req,res){
    return res.status(200).json({
        ping: "pong", //server responds with a object with a ping property set to "pong" when GET request is made
    });
});


//handle errors that happen during the request/response cycle.
app.use((error, req, res, next) =>{
    const status = error.status || 500; // determines the HTTP status code of the error or defaults to 500
    const message = error.message;

    return res.status(status).json ({
        error: {message, status},
    })

})

const port = 3002;

app.listen(port,() =>{
    console.log(`🚀 Server listening on port ` + port)
})