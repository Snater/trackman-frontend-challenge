import * as path from 'node:path';
import {config} from 'dotenv';
import cors from 'cors';
import express from 'express';
import router from './routes';

config({path: path.join(__dirname, '..', '..', '.env')});
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export default app;
