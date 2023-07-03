import express from 'express';
import {datasource} from "../db/dbcp";

export const router = express.Router();


type Course = {
    "id": string,
    "description": string,
    "duration": string
};

router.get('/',async (req, res) => {
    const courses = await datasource.query('SELECT * FROM course');
    res.json(courses);
});

router.post('/', async (req, res) => {
    const course: Course = req.body as Course;
    // validation
    if (!(/^C[0-9]{3}/.test(course.id)) || !(/^[A-Za-z ]+$/.test(course.description)
        || !(/^[1-9]+ [A-Za-z ]+$/.test(course.duration)))) {
        res.sendStatus(400);
        return;
    }
    const result = await datasource.query
    ('INSERT INTO course (id, description, duration) VALUES (?,?,?)',
        [course.id, course.description, course.duration]);
    res.sendStatus(result.affectedRows? 204:500);
});

router.delete('/:courseId', async (req, res) => {
    const result = await datasource.query('DELETE FROM course WHERE id=?', [req.params.courseId]);
    res.sendStatus(result.affectedRows ? 204 : 404);
});
