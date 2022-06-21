import express, { Request, Response } from 'express';
import path from 'path';
import FakeDataController from '../controllers/FakeDataController';

export default class App {
  private readonly _app = express();

  constructor() {
    // uncomment only if need to fetch outside of the domain
    // this._app.use(cors());

    this._app.get('/api', (req: Request, res: Response) => {
      console.log('Request :', req.originalUrl);
      res.sendFile(path.join(__dirname, '/app.html'));
    });

    this._app.use('/api/fakeData', FakeDataController);
  }

  get app() {
    return this._app;
  }

  listen(port: number) {
    this._app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  }
}