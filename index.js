const express = require("express");
const app = express();
const loop_for = require("./lib/loop_for");
const loop_foreach = require("./lib/loop_foreach");
const loop_map = require("./lib/loop_map");
const map_object = require("./lib/loop_map_object");
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.send(`Welcome to the jungle`);
});

app.get("/loop-for", (req, res) => {
    let data = ["Red", "Blue", "Green"];
    let result = loop_for(data);

    return res.send(result);
});

app.get("/loop-foreach", (req, res) => {
    let data = ["Red", "Blue", "Green"];
    let result = loop_foreach(data);

    return res.send(result);
});

app.get("/loop-map", (req, res) => {
    let data = ["Red", "Blue", "Green"];
    let result = loop_map(data);

    return res.send(result);
});

app.get("/object-loop", (req, res) => {
    let data = [
        {
            name: "Red",
            note: "Danger"
        },
        {
            name: "Yellow",
            note: "Warning"
        },
        {
            name: "Green",
            note: "Success"
        }
    ];

    let result = map_object(data);

    return res.send(result);
});

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`);
});
