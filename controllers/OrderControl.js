import { CartModel } from "../Schema/CartSchema.js";
import { OrderModel } from "../Schema/OrderSchema.js";

export const OrderData = async (req, res) => {
  const { Add, Cart, UserId } = req.body;

  try {
    const OrderData = await OrderModel({ Add, Cart, UserId });

    await OrderData.save();
    await deleteCartItems(UserId);
    console.log(OrderData, "Save");
    res.status(200).json(OrderData);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteCartItems = async (UserId) => {
  try {
    await CartModel.deleteMany({ user: UserId });
  } catch (error) {
    console.error("Error deleting cart items:", error);
    throw error; // Re-throw the error to be handled by the calling function
  }
};

export const FetchOrder = async (req, res) => {
  const Id = req.params.UserId;
  console.log(Id, "Id in order");
  try {
    const Orders = await OrderModel.find({ UserId: Id });
    console.log(Orders, "Order");
    res.status(200).json(Orders);
  } catch (error) {
    res.status(400).json(error);
  }
};
