import express, {Express, json} from 'express';
import {router as CourseHttpController} from "./api/CourseHttpController";
import cors from 'cors';

const app: Express = express();

app.use(cors());
app.use(json());
app.use('/api/v1/courses', CourseHttpController);
app.listen(8081, () => console.log("Server has been started in the port 8081"));