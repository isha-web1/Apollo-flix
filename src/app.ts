import express, { Request, Response } from 'express';
import { Movie } from './modules/movies/movie.model';
import { MovieRoute } from './modules/movies/movie.route';

const app = express()

// parser
app.use(express.json());

app.use('/api/movies', MovieRoute); 

app.get('/', (req : Request, res : Response) => {
 res.send('Hello World!')
})

export default app;