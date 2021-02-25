import express from "express";
import models from "../models";
import dbUrl from "../url";
import cors from "cors";

const app: express.Application = express();

// Midleways
app.use(cors());
app.use(express.json());

class Server {
  constructor() {}
  public app = app;
  public models = models;
  public dbUrl = dbUrl;
}

const server = new Server();
export default server;
