// import user model
import userModel from '../models/users.js';

let users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'JohnDoe@gmail.com',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'JaneSmith@gmail.com',
  },
];

export const getUsers = async (req, res) => {
  // res.send(users);
  try {
    const userList = await userModel.find(); // fetch all users
    res.status(200).json(userList);
  } catch (err) {
    res.status(500).json({ message: `Data fetching error: ${err}` });
  }
};

export const addUser = async (req, res) => {
  // users.push({ ...req.body, id: String(users.length + 1) });
  // res.send('new user added');
  try {
    const { name, email } = req.body; // destructure property from request body
    const newUser = new userModel({ name, email });
    await newUser.save();
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (err) {
    res.status(500).json({ message: `Data saving error: ${err}` });
  }
};

export const getUserById = async (req, res) => {
  // const { id } = req.params;
  // const user = users.find((user) => user.id === id);
  // res.send(user || 'USER NOT FOUND');
  try {
    const user = await userModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: `Data fetching error: ${err}` });
  }
};

export const deleteUser = async (req, res) => {
  // const { id } = req.params;
  // users = users.filter((user) => user.id !== id);
  // res.send(`user id ${id} has been deleted`);
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: `Data deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: `Data deletion failed ${err}` });
  }
};

export const updateUser = async (req, res) => {
  // const { id } = req.params;
  // const { name, email } = req.body;
  // const user = users.find((user) => user.id === id);
  // if (name) user.name = name;
  // if (email) user.email = email;
  // res.send(`user id ${id} has been updated`);
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).send(updatedUser);
  } catch (err) {
    res.status(500).send({ message: `User updation failed, ${err}` });
  }
};
