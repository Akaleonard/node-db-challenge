const express = require("express");
const tasks = require("./tasks-model");
const router = express.Router();

router.get("/", (req, res) => {
    tasks.get()
    .then(tasks => {
        for(i=0; i<tasks.length; i++) {
            tasks[i].completed === 0 ? (tasks[i].completed = false) : (tasks[i].completed = true);
        }

        res.status(200).json(tasks);
    })
    .catch(err => {
        console.log(error);
        res.status(500).json({error: "error"})
    })
});

router.post("/", (req, res) => {
    const body = req.body;
    tasks.add(body)
    .then(task => {
        res.status(201).json(task);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "error"})
    })
});

module.exports = router;