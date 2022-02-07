const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

const Record = require("../models/record");

recordRoutes.get("/record", (req, res) => {
    Record.find()
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

recordRoutes.post("/record/add", (req, res) => {
    const record = new Record({
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
    });

    record
        .save()
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

recordRoutes.get("/record/:id", (req, res) => {
    Record.findById(req.params.id)
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

recordRoutes.put("/record/:id", (req, res) => {
    Record.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        },
        { useFindAndModify: false }
    )
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

recordRoutes.delete("/record/:id", (req, res) => {
    Record.findByIdAndDelete(req.params.id)
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

module.exports = recordRoutes;
