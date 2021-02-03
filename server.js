const express = require('express');

const app = express();

const whitelist = ['http://localhost:3000']; // list of allow domain

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) {
            return callback(null, true);
        }

        if (whitelist.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}

app.use(express.static('./dist/factgrid'));

app.use(cors(corsOptions));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/factgrid/'}),
);

app.listen(process.env.PORT || 8080);

