const path = require('path')
//require('rootpath')();
const express = require('express');
const appExp = express();
const cors = require('cors');
const bodyParser = require('body-parser');
//const myTok = require('./server/middleware/myTok');
const errorHandler = require('./server/helpers/error-handler');
//const route1=require('./server/routes/signuproute');
const route2=require('./server/routes/user2.route');



appExp.use(bodyParser.urlencoded({ extended: false }));
appExp.use(bodyParser.json());
appExp.use(cors());

//appExp.use(myTok());

// api routes
//appExp.use('/info_users', require('./server/routes/signuproute'));
//appExp.use(route1);
appExp.use(route2);


// global error handler
appExp.use(errorHandler);
appExp.get('/', (req, res) => res.send({message: 'welcome to our bank'}));

// start server
const port = process.env.NODE_ENV === 'mybanka' ? 80:40000;
const server = appExp.listen(port, function () {
    console.log('Server listening on port ' + port);
});