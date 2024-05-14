const express = require('express');
const app = express();
require('dotenv').config();

app.set('json spaces', 5); // to prettify json response

app.use(express.json());
app.use(express.static('build', { index: false }));

const port = process.env.PORT || 5001;
const fileparser = require('./modules/fileparser');

app.post('/api/upload', async (req, res) => {
    await fileparser(req)
    .then(data => {
        res.status(200).json({
            message:"Success",
            data:data
        })
    })
    .catch(error => {
        res.status(400).json({
            message: "An error occurred.",
            error:error
        })
    })
});

app.listen(port, function() {
    console.log('Listening on port:', port);
})