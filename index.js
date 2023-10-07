const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const user = require('./models/user');

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
const routes = require('./routes/bankApiRoutes');
routes(app);
const cors = require('cors');


// Enable CORS for all routes
app.use(cors());
// Your routes go here
console.log('Routes loaded');
// Connect to MongoDB 

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
    })
    // server listening 
server.listen(port, () => {
    console.log(`Server running on port ${port}`); 
});