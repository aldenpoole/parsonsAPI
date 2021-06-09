import express from 'express';
import bodyParser from 'body-parser';
import trajectoriesRoutes from './routes/trajectories/trajectories.js';
import filtersRoutes from './routes/filters/filters.js';
import usersRoutes from './routes/users/users.js';
import systemsRoutes from './routes/systems/systems.js';
import downloadsRoutes from './routes/downloads/downloads.js'
import path from 'path'


const app = express();
const PORT = 5000;
const __dirname = path.resolve(path.dirname(''));

app.use(bodyParser.json());

app.use('/trajectories', trajectoriesRoutes)
app.use('/filters', filtersRoutes)
app.use('/users', usersRoutes)
app.use('/systems', systemsRoutes)
app.use('/downloads',downloadsRoutes)

app.get('/', (req, res) =>{
    console.log('TEST')
    res.sendFile(path.join(__dirname + '/html/index.html'))
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

