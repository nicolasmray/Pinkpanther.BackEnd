const { Review } = require("../../db");
const reviewService = require("./reviewService");

const postProductReview = async (req, res) => {
  try {
    const { title, comment, review, customerId, productId } = req.body;

    // buscar la review de un producto de un usuario, si tiene la reemplaza, evitando 2 reviews de un usuario en un producto
    let existingReview = await Review.findOne({
      where: {
        customerId,
        productId,
      },
    });

    if (existingReview) {
      if (existingReview.active) {
        existingReview.title = title;
        existingReview.comment = comment;
        existingReview.review = review;
        existingReview.active = true;
        await existingReview.save();

        await reviewService.updateProductReview(productId);

        return res
          .status(200)
          .json({ message: "Review updated successfully", existingReview });
      } else {
        return res.status(400).json({ message: "Review is not active" });
      }
    }

    const newReview = await Review.create({
      title,
      comment,
      review,
      customerId,
      productId,
      active: true,
    });
    await reviewService.updateProductReview(productId);
    return res
      .status(201)
      .json({ message: "Review posted successfully", newReview });
  } catch (error) {
    return res.status(502).json({ error: error.message });
  }
};

module.exports = postProductReview;
