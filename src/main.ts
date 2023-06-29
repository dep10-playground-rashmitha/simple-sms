import express, {Express, json} from 'express';
import {router as StudentHttpController} from "./api/StudentHttpController";

const app: Express = express();

app.use('/api/v1/courses', StudentHttpController);
app.use(json());

app.listen(8081, () => console.log("Server has been started"));