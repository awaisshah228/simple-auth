require('dotenv').config();

const http = require('http');
const {mongoConnect}=require('./utils/mongo')


const app = require('./app');
// const { mongoConnect } = require('./utils/mongo');




const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  
  
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();