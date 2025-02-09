import { model, Schema } from "mongoose";
import { TMovie,  } from "./movie.interface";



const movieSchema = new Schema<TMovie>({
  
    title: {
        type: String,
        required: [true, "Title is required"],
      },
      description: {
        type: String,
        required: [true, "Description is required"],
      },
      releaseDate: {
        type: Date,
      },
      genre: {
        type: String,
        required: [true, "Genre is required"],
      },
     
      slug: {
        type: String,
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
      viewCount: {
        type: Number,
        default: 0,
      },
      totalRating : {
        type : Number,
        default : 0
      }
})


export const Movie = model<TMovie>("Movie", movieSchema);