import React, { useState } from "react";
import { reviews } from "../data/reviews";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { job, name, quote, text } = reviews[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex > reviews.length - 1 ? 0 : newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return newIndex < 0 ? reviews.length - 1 : newIndex;
    });
  };
  return (
    <main className="reviews">
      <div className="review">
        <header>
          <FaQuoteLeft id="quote" />
          <h1>{quote}</h1>
        </header>
        <div className="content">
          <h5> {text}</h5>
          <h4>{name}</h4>
          <h5>{job}</h5>
        </div>
      </div>
      <div className="navigate">
        <AiOutlineLeft onClick={prevPerson} />{" "}
        <AiOutlineRight onClick={nextPerson} />
      </div>
    </main>
  );
};

export default Review;
