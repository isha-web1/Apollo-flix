import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";
import {format} from 'date-fns'
import slugify from 'slugify'

const createMovie = async(payLoad: TMovie) => {
    const date = format(payLoad.releaseDate, "dd-MM-yyyy");
    //creating slug 
   const slug = slugify(`${payLoad.title}-${date}}`, {
    lower: true,
});
const result = await Movie.create({...payLoad, slug});
    return result;
}

const getAllMovies = async () => {
    const result = await Movie.find();
    return result;
  };

  const getMovieBySlug = async (slug:string) =>{
    const result = Movie.findOne({slug : slug})
    return result;
  }

export const MovieService = {
    createMovie,
    getAllMovies,
     getMovieBySlug

};