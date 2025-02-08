
import express from 'express';
import { MovieController } from './movie.controllers';


const router = express.Router();

router.post('/', MovieController.createMovie);

router.get('/', MovieController.getAllMovies);

router.get('/:slug', MovieController.getMovieBySlug)




export const MovieRoute = router;