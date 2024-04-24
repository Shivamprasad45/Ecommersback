import { CartModel } from "../Schema/CartSchema.js";
export const Cart = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
      Quantity,
      user,
      ProductId,
    } = req.body;
    console.log(user);
    const Cartdata = await CartModel({
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
      Quantity,
      user,
      ProductId,
    });

    // Create new cart

    const data = await Cartdata.save();
    res.status(201).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
    console.log(error);
  }
};

//Fetch cart data by user id

export const fetchDataCartByUser = async (req, res) => {
  try {
    const Id = req.query.id;
    const CartData = await CartModel.find({ user: Id });

    res.status(200).json(CartData);
  } catch (error) {
    res.status(200).json({ error });
  }
};

export const DELETEDataCartByUser = async (req, res) => {
  try {
    const Id = req.params.DelId;
    const CartData = await CartModel.findByIdAndDelete(Id);

    res.status(200).json(CartData);
  } catch (error) {
    res.status(200).json({ error });
  }
};

export const UpdateCartByUser = async (req, res) => {
  console.log(req.body, "Update ");
  try {
    const CartData = await CartModel.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });

    res.status(200).json(CartData);
  } catch (error) {
    res.status(200).json({ error });
  }
};
