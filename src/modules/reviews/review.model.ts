import { model, Schema } from "mongoose";
import { TReviews } from "./review.interface";

const reviewSchema = new Schema<TReviews>({
    movie : {
        type: Schema.Types.ObjectId,
        ref: "Movie",
        required: true
    },
    email:{type:String, required:true},
    rating:{type:Number, required:true},
    comment : {type:String, required:true}
})

export const Review = model<TReviews>('Review', reviewSchema);