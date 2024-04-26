const express = require('express');

const app = express();
const path = require('path');

const DIST_DIR = __dirname + "/dist/";
const HTML_FILE = path.join(DIST_DIR, 'index.html');

//if main catalog is dist!
app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});

app.listen(3000, () => {
    console.log('Express is listening on port 3000!')
})