
import express from 'express';
import { MovieController } from './movie.controllers';


const router = express.Router();

router.post('/', MovieController.createMovie);

router.get('/', MovieController.getAllMovies);

router.get('/:slug', MovieController.getMovieBySlug)

router.post('/:slug/review', reviewControllers.addReview)

router.get('/:slug/reviews', reviewControllers.addReview)

router.put('/:slug/review', reviewControllers.updateReview)

router.delete('/:slug/review', reviewControllers.addReview);


export const MovieRoute = router;