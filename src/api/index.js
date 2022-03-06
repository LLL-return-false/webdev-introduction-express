const http = require('http');
const express = require('express');
const cors = require('cors');

// API EXAMPLE
//
// This is the file that runs an Express API server with a single endpoint for demonstration.
// Press CTRL+C in the terminal window to shut down

// This is the main function of the API
const api = async () => {

   // This is the port that the api will be available on
   const port = 4200;

   // This initializes express under a constant called 'app'
   const app = express();

   // This adds cors middleware to enable requests from any origin 
   app.use(
      cors({
         origin:"*"
      })
   );

   // This is an endpoint, which takes in requests and sends back a response
   app.get('/hello-world/:name',async (req, res) => {
      res.send(
         {
            content:`hello world, hello ${req.params.name}`
         }
         );
   });

   // This uses the http package to create a server 
   const serv = http.createServer(app);

   // This makes the server listen for requests on the designated port
   serv.listen(port);
   console.log(`listening on port ${port}`);
}

// This runs the main function
api();