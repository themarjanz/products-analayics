import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="review-container">
      <h1 className="text-4xl text-orange-400 text-center font-bold uppercase mt-8">What Our Customer say!!</h1>
      <div className="review-content md:grid grid-cols-3 gap-10 mt-20 mx-auto">
        {reviews.map((review) => (
          <Review review={review} key={review.id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
