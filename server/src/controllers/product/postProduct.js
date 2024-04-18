const hardcodedProduct = {
  products: [
    {
      name: "Top deportivo",
      photo: {
        url: "https://drive.google.com/drive/folders/1PGN8jdjpsda5mMIZ9JAjlPLerRTvuvXE",
      },

      size: "5",
      color: "verde esmeralda",
      priceEfectivo: 10800,
      priceCuotas: 14050,
      enable: true,
      quantity: "1",
    },
  ],
};

const postProduct = async (req, res) => {
  try {
    return res.status(200).json(hardcodedProduct);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// revisar codigo para usar con get

module.exports = postProduct;
