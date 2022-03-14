const express = require('express');
const app = express();
const port = 5000;

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})