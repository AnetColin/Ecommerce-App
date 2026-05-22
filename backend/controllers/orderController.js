const Order = require("../models/Order");

const createOrder = async (req, res) => {
  const order = await Order.create({
    user: req.user.id,
    items: req.body.items,
    totalPrice: req.body.totalPrice,
  });

  res.json(order);
};

module.exports = {
  createOrder,
};
