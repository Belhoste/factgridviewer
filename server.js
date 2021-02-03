const express = require('express');
const cors = require('cors');

const app = express();

/*app.use(
    cors({
     origin: "*",
     credentials : true,
     methods: "GET"
     })
     );
     */

app.use(express.static('./dist/factgrid'));


app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/factgrid/'}),
);

app.listen(process.env.PORT || 8080);

