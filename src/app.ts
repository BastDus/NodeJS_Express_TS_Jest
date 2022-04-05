import express, { Express } from 'express';

export default class App {
  private readonly _app = express();

  constructor() {
    this._app.get('/', (req, res) => {
      console.log('➡️  Home Page');
      res.send('Home Page');
    });

    // ===============
    //   other path
    // ===============
    // this._app.get('/page2', (req, res) => {
    //   console.log('➡️  Page2');
    //   res.send('Page2');
    // });

    // this._app.put('/form', (req, res) => {
    //   console.log('➡️  Delete');
    //   res.send('Delete');
    // });
  }

  get app(): Express {
    return this._app;
  }

  listen(port: number) {
    this._app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  }
}
