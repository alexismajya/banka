import path from'path';
import express from 'express';
const appExp = express();
import cors from'cors';
import bodyParser from'body-parser';
//const myTok = require('./server/middleware/myTok');
import errorHandler from'./server/helpers/error-handler';
import route1 from'./server/routes/signuproute';
//import route2 from'./server/routes/signinroute';

appExp.use(bodyParser.urlencoded({ extended: false }));
appExp.use(bodyParser.json());
appExp.use(cors());

//appExp.use(myTok());

appExp.use(route1);
//appExp.use(route2);

appExp.use(errorHandler);
appExp.get('/', (req, res) => res.send({message: 'welcome to our bank'}));

const port = process.env.NODE_ENV || 40000;
const server = appExp.listen(port,  () =>
    console.log("Server listening on port "+port));

