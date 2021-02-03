const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.options('*', cors())

app.use(express.static('./dist/factgrid'));


app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/factgrid/'}),
);

app.listen(process.env.PORT || 8080);

