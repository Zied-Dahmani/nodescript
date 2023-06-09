import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './routers';

const app = express();
app.use(cors({credentials: true}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/',router());

const MONGO_URL = 'mongodb://localhost:27017/NodeScript';
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(error:Error) => console.log(error));


const server = http.createServer(app);
server.listen(8080,() => {
console.log('Server running on http://localhost:8080/');
});