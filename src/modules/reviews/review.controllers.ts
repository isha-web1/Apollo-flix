import { Request, Response } from "express";
import { reviewServices } from "./review.services";

const addReview =  async(req:Request, res : Response)=>{
    const {slug} = req.params;
    const ReviewData = req.body;

    const result = await reviewServices.addReview(slug, ReviewData);

    res.json({
        message: 'Review created successfully!!',
        success: true,
        data: result
    });  

}

// const getAllReviews = async (req: Request, res: Response) => {
//     try {
//       const result = await ReviewService.getAllReviews();
  
//       res.status(200).json({
//         success: true,
//         message: "Reviews are fetched successfully !!",
//         data: result,
//       });
//     } catch (err: any) {
//       res.status(500).json({
//         success: false,
//         message: "Could not fetch Reviews!",
//         error: err,
//       });
//     }
//   };

//   const getReviewById = async (req: Request, res: Response) => {
//     try {
//         const { slug } = req.params;
//         const result = await ReviewService.getReviewBySlug(slug);
//         res.status(200).json({
//             success: true,
//             message: "Review fetched successfully !!",
//             data: result,
//         });
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             message: "Could not fetch single Review!",
//             error: err,
//         });
//     }
// };

// const updateReview = async (req: Request, res: Response) => {
//     try {
//         const { slug } = req.params;
//         const result = await ReviewService.updateReview(slug);
//         res.status(200).json({
//             success: true,
//             message: "Review fetched successfully !!",
//             data: result,
//         });
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             message: "Could not fetch single Review!",
//             error: err,
//         });
//     }
// };

// const deleteReview = async (req: Request, res: Response) => {
//     try {
//         const { slug } = req.params;
//         const result = await ReviewService.deleteReview(slug);
//         res.status(200).json({
//             success: true,
//             message: "Review deleted successfully!!",
//             data: result,
//         });
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             message: "Could not delete Review!",
//             error: err,
//         });
//     }
// }

export const ReviewController = {
    addReview,
    // getAllReviews,
    //  getReviewById,
    //  updateReview,
    //  deleteReview
}