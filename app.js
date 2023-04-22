const express = require('express');

const app = express();
const port = process.env.PORT || 8888;

app.use(express.static('public'));
app.use('/master', express.static(__dirname + '/public/master'));
app.use('/assets', express.static(__dirname + '/public/assets'));
app.use('/routes', express.static(__dirname + '/public/routes'));

app.get('/', (req, res) => {
    // res.sendFile(__dirname + "/public/routes/home/index.html");
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App available at http://localhost:${port}`);
});