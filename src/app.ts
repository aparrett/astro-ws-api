import express, { Response } from 'express';
import sls from 'serverless-http';
import forecast from './services/forecast';

const app = express();

const router = express.Router();

router.use('/forecast', forecast);
router.get('/ping', async (_, res: Response) => {
  res.status(200).send('Ping success.');
});

app.use('/', router);

export const server = sls(app);
