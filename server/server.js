import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import serverConfig from './config';

import dummyData from './models/dummyData';
import userData from './models/user';

const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  // feed some dummy data in DB.
  dummyData();
  userData();
});

app.use(passport.initialize());

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');

  if('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
})

import localSignupStrategy from './passport/local-signup';
import localLoginStrategy from './passport/local-login';
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


import authCheckMiddleware from './middleware/auth-check';
app.use('/api', authCheckMiddleware);

import authRoutes from './routes/auth';
app.use('/auth', authRoutes);

import apiRoutes from './routes/api';
app.use('/api', apiRoutes);



app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`VBTG database is running on port: ${serverConfig.port}!`); // eslint-disable-line
  }
});
