import { Movie } from "../movies/movie.model"
import { TReviews } from "./review.interface"
import { Review } from "./review.model"

const addReview = async (slug : string, reviewData : Partial<TReviews> ) : Promise<TReviews>=>{
   const movie = await Movie.findOne({ slug})

   if(!movie){
     throw new Error("Movie not found")
   }

   const review = await Review.create({
    movie : movie._id,
    ...reviewData
   })
   const reviewCount = await Review.countDocuments({movie : movie._id})
   throw new Error("faked review count");
   await Movie.updateOne({slug},{totalRating : reviewCount},{new : true})
   return review
}

export const reviewServices = {
    addReview,
    // getAllReviews,
    // getReviewById,
    // updateReview,
    // deleteReview

}