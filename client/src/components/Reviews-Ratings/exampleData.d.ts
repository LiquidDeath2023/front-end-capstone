// declare module './exampleData' {
//   export interface Photo {
//     id: number;
//     url: string;
//   }

//   export interface Review {
//     review_id: number;
//     rating: number;
//     summary: string;
//     recommend: boolean;
//     response: string | null;
//     body: string;
//     date: string;
//     reviewer_name: string;
//     helpfulness: number;
//     photos: Photo[];
//   }

//   export type ReviewData = Review[];

//   export interface Ratings {
//     [key: number]: number;
//   }

//   export interface Recommended {
//     [key: number]: number;
//   }

//   export interface Characteristic {
//     id: number;
//     value: string;
//   }

//   export interface Characteristics {
//     [key: string]: Characteristic;
//   }

//   export interface ReviewMetaData {
//     product_id: string;
//     ratings: Ratings;
//     recommended: Recommended;
//     characteristics: Characteristics;
//   }

//   const exampleData: {
//     getReviewsData: ReviewData;
//     getReviewsMeta: ReviewMetaData;
//   };

//   export default exampleData;
// }
