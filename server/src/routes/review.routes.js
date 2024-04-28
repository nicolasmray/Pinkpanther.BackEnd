const { Router } = require("express");
const getProductReviews = require("../controllers/review/getReview");
const postProductReview = require("../controllers/review/postReview");

const review = Router();

review.get("/:productId", getProductReviews);
review.post("/", postProductReview);

module.exports = review;
