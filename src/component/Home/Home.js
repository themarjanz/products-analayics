import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import Reviews from "../Reviews/Reviews";
import ReviewShort from "../ReviewShort/ReviewShort";
const Home = () => {
  const [reviews, setReviews] = useReviews();
  const showReviews = reviews.slice(0, 3);

  return (
    <div className="container">
      <div className="home-container flex justify-between mt-8">
        <div className="home-info w-5/12">
          <div className="home-content">
            <h1 className="text-5xl mb-5 leading-tight">
              Modern Chair
              <br />
              Modern Furniture
            </h1>
            <p className="text-2xl leading-10 ">
              Furniture should always be comfortable. And always have a piece of
              art that you made somewhere in the home.
            </p>
            <Link to="/blogs">
              <button className="bg-orange-300 text-xl p-3 rounded-md w-1/3 mt-5 hover:bg-orange-500 hover:text-white cursor-pointer duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="furniture-img w-6/12">
          <img
            className="rounded-lg"
            src="https://wallpaperaccess.com/full/2076086.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="review-container mt-16">
        <h1 className="text-6xl text-center">Customer Reviews</h1>
        <div className="short-review md:grid grid-cols-3 gap-10 text-center mt-8">
          {showReviews.map((cart) => (
            <ReviewShort cart={cart} key={cart.id}></ReviewShort>
          ))}
        </div>
        <div className="all-review-link text-center mt-5 mb-2">
          <Link to="/reviews">
            <button className="bg-orange-300 text-xl p-3 rounded-md w-1/3  mt-5 hover:bg-orange-500 hover:text-white cursor-pointer duration-300">
              See all Reviews
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
