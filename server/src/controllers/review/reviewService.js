const { Review, Product } = require("../../db");

async function updateProductReview(productId) {
  try {
    // Busca todas las calificaciones asociadas a un producto por productId
    const reviews = await Review.findAll({
      where: {
        productId,
      },
    });

    // Ordena las calificaciones de forma ascendente (las más bajas primero)
    reviews.sort((a, b) => a.review - b.review);

    // Toma las 5 calificaciones más bajas
    const lowestReviews = reviews.slice(0, 5);

    // Toma las 5 calificaciones más altas
    const highestReviews = reviews.slice(-5);

    // Combina las calificaciones más bajas y las más altas
    const selectedReviews = [...lowestReviews, ...highestReviews];

    // Calcula el promedio de las calificaciones seleccionadas
    const totalReviews = selectedReviews.length;
    const totalReviewValue = selectedReviews.reduce(
      (sum, review) => sum + review.review,
      0
    );
    const averageReview =
      totalReviews > 0
        ? Math.round((totalReviewValue / totalReviews) * 2) / 2
        : 0;

    // Actualiza el campo de review en el modelo de Producto
    const product = await Product.findByPk(productId);
    if (product) {
      product.review = averageReview;
      await product.save();
    }
  } catch (error) {
    console.error("Error al actualizar la review del producto:", error);
  }
}

module.exports = {
  updateProductReview,
};
