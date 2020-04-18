const express = require("express");
const resources = require("./resource-model");
const router = express.Router();

router.get("/", (req, res) => {
    resources.get()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: "error"})
    });
});

router.post("/", (req, res) => {
    const body = req.body;
    resources.add(body)
    .then(resource => {
        res.status(201).json(resource);
    }) 
    .catch(err => {
        res.status(500).json({message: "error"});
    });
})

module.exports = router;