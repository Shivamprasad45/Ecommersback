import { UserModel } from "../Schema/User.js";
export const User = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userWithEmail = await UserModel.findOne({ email });

    if (userWithEmail) {
      return res.status(200).json({ message: 1 });
    }
    // Check if user with email already exists

    // Check if user with username already exists
    const userWithUsername = await UserModel.findOne({ password });
    if (userWithUsername) {
      return res.status(200).json({ message: 2 });
    }
    const ExistUser = await UserModel.findOne({ email });

    if (!ExistUser) {
      const newUser = new UserModel({ email, password });
      // console.log(newUser);
      await newUser.save();

      res.status(201).json({ message: 3, data: newUser });
    }
    // Create new user
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

export const LoginCon = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ message: "Email is wrong" });
    }

    if (user) {
      if (user.email !== email) {
        console.log("Email is wrong");
        return res.status(400).json({ message: "Email is wrong" });
      }
      if (user.password !== password) {
        return res.status(400).json({ message: "Password is wrong" });
      }
    }

    res.status(200).json({ data: user });
  } catch (error) {
    res.status(400).json({ message: "Some thing another wrong" });
  }
};

export const AddressesAdd = async (req, res) => {
  try {
    const userId = req.params.UserId;

    const { Addresses } = req.body;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Ensure that Addresses is an array
    if (!Array.isArray(Addresses)) {
      return res.status(400).json({ message: "Addresses must be an array" });
    }

    // Push each address object into user.Addresses array
    Addresses.forEach((address) => {
      user.Addresses.push(address);
    });

    // Save the updated user object
    await user.save();

    res.status(200).json(Addresses[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const RemoveAddress = async (req, res) => {
  try {
    const userId = req.params.UserId;
    const { Addresses } = req.body;

    const user = await UserModel.findById(userId);

    const index = user.Addresses.findIndex(
      (item) => item.billing_zip === Addresses.billing_zip
    );
    user.Addresses.splice(index, 1);

    await user.save();
    res.status(200).json(Addresses);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const UpdateAddresses = async (req, res) => {
  try {
    const { Addresses, UserId, Index } = req.body;
    console.log(Addresses, UserId);

    const user = await UserModel.findById(UserId);

    user.Addresses.splice(Index, 1, Addresses[0]);
    await user.save();
    res.status(200).json({ Addresses, Index });
  } catch (error) {
    res.status(400).json(error);
  }
};
