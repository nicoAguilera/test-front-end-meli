'use strict';

import express from 'express';
import cors from 'cors';

import Options from './options';
import ApiRouter from './api/api.router';

const app = express();
const corsOptions = {
	origin: true,
	methods: ['GET'],
	optionsSuccessStatus: 204
};
const CORSMiddleware = cors(corsOptions);

app.options('*', CORSMiddleware)
app.use(CORSMiddleware);
app.use(`${Options.API_URI}`, ApiRouter);

// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, 'client/build')));

// launch our backend into a port
app.listen(Options.SERVER_PORT, () => console.log(`API READY! LISTENING ON PORT ${Options.SERVER_PORT}`));