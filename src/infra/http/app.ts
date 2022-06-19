import cors from 'cors';
import 'reflect-metadata';
import express from 'express';
import { config } from 'dotenv-flow';

import '../container';
import api from '../../config/api';
import { appRoutes } from './app.routes';

config({ silent: true });
const apiConfig = api();

const app = express();

app.use(cors());
app.use(express.json());

app.use(apiConfig.BASE_URL, appRoutes);

export { app };
