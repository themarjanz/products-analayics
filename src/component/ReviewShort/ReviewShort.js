import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewShort = (props) => {
  const { name, rating, comment, img } = props.cart;
  return (
    <div className="review-info rounded-md shadow-lg p-8 mx-auto leading-8">
      <div className="review-img">
        <img className="w-20 h-20 mb-5 rounded-full ml-32" src={img} alt="" />
      </div>
      <div className="review-caption">
        <h4 className="text-xl mb-3">{name}</h4>
        <h5>
          {rating === 1 ? (
            <span>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </span>
          ) : (
            <span></span>
          )}
        </h5>
        <h5>
          {rating === 2 ? (
            <span>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </span>
          ) : (
            <span></span>
          )}
        </h5>
        <h5>
          {rating === 3 ? (
            <span>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </span>
          ) : (
            <span></span>
          )}
        </h5>
        <h5>
          {rating === 4 ? (
            <span>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </span>
          ) : (
            <span></span>
          )}
        </h5>
        <h5>
          {rating === 5 ? (
            <span>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </span>
          ) : (
            <span></span>
          )}
        </h5>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default ReviewShort;
