const { Order } = require("../../db");

const postOrder = async ({
  orderDate,
  status,
  trackingNumber,
  trackingCourierName,
  //detailId ? receiptId? trackingId?
}) => {
  if (!orderDate || !status || !trackingNumber || !trackingCourierName)
    throw new Error("Faltan datos");

  const newOrder = await Order.create({
    orderDate,
    status,
    trackingNumber,
    trackingCourierName,
  });

  let detail = await getDetail;

  console.log(detail);
  newOrder.addPaymentDetail(detail);
  return newOrder;
};

module.exports = postOrder;
