const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/celsius-tofahrenheit', function (req, res) {
    // Aquí pueden hacer lo que ustedes quieran
    const temp = parseFloat(req.query.value);
    const convertedTemp = temp * 1.8 + 32;
    res.send({"value" : convertedTemp});
})

app.get('/username', (req, res) => {
    const userName = req.query.value;
    console.log({userName})
    res.send({"Name" : userName });
})



const server = app.listen(process.env.PORT || 3000, function () {
    console.log(`Listening on port ${server.address().port}`);
});
