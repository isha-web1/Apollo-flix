export type TReviews = {
    email: string;
    rating: number;
    comment: string;
}


export type TMovie = {
    
    title: string;
    description: string;
    releaseDate: Date;
    genre: string;
    reviews : [TReviews];
    slug: string;
    viewCount: number;
    isDeleted?: boolean;
}