import express from 'express';

export const router = express.Router();

type Course = {
    "id": string,
    "description"; string,
    "duration": string
};

router.get('/',(req, res)=>{

});

router.post('/', (req, res) => {

});

router.delete('/:courseId', (req, res) => {

});