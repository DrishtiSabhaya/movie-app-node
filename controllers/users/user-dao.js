import UserModel from "./user-model.js";

export const findAllUsers = async () => UserModel.find().exec();

export const findUserById = async (uid) => UserModel.findById(uid);

export const createUser = async (user) => UserModel.create(user);

export const updateUser = async (uid, user) => UserModel.updateOne({_id: uid}, {$set: user});

export const deleteUser = async (uid) => UserModel.deleteOne({_id: uid});

export const findUserByUsername = async(username) => UserModel.find({ username });

export const findUserByCredentials = async (username, password) => UserModel.findOne({ username, password });
