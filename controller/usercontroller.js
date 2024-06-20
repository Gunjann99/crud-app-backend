import User from "../models/usermodel.js";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    if (!userData) {
      return res.status(404).json({ message: "user data not found" });
    }
    const savedData = await userData.save();
    res.status(200).json({msg : "User Added Successfully"});
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData.length) {
      return res.status(404).json({ message: "user data not found" });
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "user data not found" });
    }
    res.status(200).json(userExist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "user data not found" });
    }
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({msg : "User Updated successfully"});
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "user data not found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted sucsessfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
