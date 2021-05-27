import express from 'express';
import bodyParser from 'body-parser';

import trajectoriesRoutes from './routes/trajectories.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/trajectories', trajectoriesRoutes)

app.get('/', (req, res) =>{
    console.log('TEST')
    res.send('API Library for Trajectories')
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

