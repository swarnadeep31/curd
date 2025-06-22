import User from "../models/user.js";

export const create = async (req, res) => {
  try {
    const { email } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const userData = new User(req.body);
    const saveUser = await userData.save();
    res.status(200).json(saveUser);
  } catch (error) {
    console.error("Create User Error:", error); // 👈 log the actual error
    res.status(500).json({ error: "Internal Server error." });
  }
};

export const fetch = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "User Not found." });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error." });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: "User Not Found," });
    }
    const updateuser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json({ error: "Internal Server error." });
  } catch (error) {
    res.status(500).json({ error: "Internal Server error." });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: "User Not Found," });
    }
    await User.findByIdAndDelete(id);
    res.status(201).json({ message: "User delted succesfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server error." });
  }
};
