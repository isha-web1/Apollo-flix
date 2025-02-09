
import express from 'express';
import { MovieController } from './movie.controllers';
import { ReviewController } from '../reviews/review.controllers';


const router = express.Router();

router.post('/', MovieController.createMovie);

router.get('/', MovieController.getAllMovies);

router.get('/:slug', MovieController.getMovieBySlug)

router.post('/:slug/review', ReviewController.addReview)

// router.get('/:slug/reviews', ReviewController.addReview)

// router.put('/:slug/review', ReviewController.getReviewById)

// router.delete('/:slug/review', ReviewController.addReview);


export const MovieRoute = router;