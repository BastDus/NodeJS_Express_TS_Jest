import express, { Request, Response } from 'express';
import { fakeData } from '../mock/fakeData';

const fakeDataRoutes = express.Router();

fakeDataRoutes.get('/getData', async (req: Request, res: Response) => {
  console.log('Request :', req.originalUrl);
  try {
    const data = fakeData;
    res.status(200).json(data);
  } catch (error: any) {
    console.log(error);
    res.status(404).json({ errors: error.message });
  }
});

fakeDataRoutes.post('/create', async (req: Request, res: Response) => {
  console.log('Request :', req.originalUrl);
  try {
    // do something
  } catch (error: any) {
    console.log(error);
    res.status(404).json({ errors: error.message });
  }
});

fakeDataRoutes.get('/debug', async (req: Request, res: Response) => {
  console.log('Request :', req.originalUrl);
  try {
    // do something
  } catch (error: any) {
    console.log(error);
    res.status(404).json({ errors: error.message });
  }
});

export default fakeDataRoutes;
