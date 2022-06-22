const express = require('express');
const app = express();
const events = require('./events');
var cors = require('cors')


app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    const { q } = req.query
    const keys = ["name", "desc", "category", "locations"]

    if (q) {
        const filtered = events.filter(event =>
            keys.some(key => event[key].includes(q))
        )

        return res.json(filtered);
    }
    res.status(200).json(events)
});



app.get("/:id", (req, res) => {
    const id = req.params.id;
    const event = events.find(event => event.id === +id);
    if (!event) {
        res.status(404).json({ message: "Event not found" });
        return;
    }
    res.status(200).json(event);
});



app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
