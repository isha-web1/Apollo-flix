import { Request, Response } from "express";
import { MovieService } from "./movie.services";

const createMovie =  async(req:Request, res : Response)=>{

    const MovieData = req.body;

    const result = await MovieService.createMovie(MovieData);

    res.json({
        message: 'Movie created successfully!!',
        success: true,
        data: result
    });  

}

const getAllMovies = async (req: Request, res: Response) => {
    try {
      const result = await MovieService.getAllMovies();
  
      res.status(200).json({
        success: true,
        message: "Movies are fetched successfully !!",
        data: result,
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not fetch movies!",
        error: err,
      });
    }
  };

  const getMovieBySlug = async (req: Request, res: Response) => {
    try {
        const { slug } = req.params;
        const result = await MovieService.getMovieBySlug(slug);
        res.status(200).json({
            success: true,
            message: "Movie fetched successfully !!",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch single movie!",
            error: err,
        });
    }
};

export const MovieController = {
    createMovie,
    getAllMovies,
     getMovieBySlug
}