import express from 'express';
import bodyParser from 'body-parser';
import trajectoriesRoutes from './routes/trajectories/trajectories.js';
import filtersRoutes from './routes/filters/filters.js';
import usersRoutes from './routes/users/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/trajectories', trajectoriesRoutes)
app.use('/filters', filtersRoutes)
app.use('/users', usersRoutes)

app.get('/', (req, res) =>{
    console.log('TEST')
    res.send('RTS API Home')
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

