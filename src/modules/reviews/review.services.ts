import { Movie } from "../movies/movie.model"
import { TReviews } from "./review.interface"
import { Review } from "./review.model"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addReview = async (slug : string, reviewData : Partial<TReviews> ) : Promise<TReviews | any>=>{
   const session = await Movie.startSession();
   const movie = await Movie.findOne({ slug}).session(session);

   if(!movie){
     throw new Error("Movie not found")
   }
   try{
    session.startTransaction();
    
   const review = await Review.create([{
    movie : movie._id,
    ...reviewData
   }],{session})
   const reviewCount = await Review.countDocuments({movie : movie._id}).session(session)
  
   await Movie.updateOne({slug},{totalRating : reviewCount},{session})
//    return review
   await session.commitTransaction();
   return review[0];
   }catch(error){
    console.log(error)
  await  session.abortTransaction();
   }
   session.endSession();
}

export const reviewServices = {
    addReview,
    // getAllReviews,
    // getReviewById,
    // updateReview,
    // deleteReview

}