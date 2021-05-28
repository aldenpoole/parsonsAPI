import express from 'express';
import bodyParser from 'body-parser';
import trajectoriesRoutes from './routes/trajectories/trajectories.js';
import filtersRoutes from './routes/filters/filters.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
//createData.js in /trajectories not working...
//try importing it here.
app.use('/trajectories', trajectoriesRoutes)
app.use('/filters', filtersRoutes)

app.get('/', (req, res) =>{
    console.log('TEST')
    res.send('RTS API Home')
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

