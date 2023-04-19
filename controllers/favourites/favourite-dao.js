import FavouriteModel from "./favourite-model.js";

export const findAllFavourites = async () => FavouriteModel.find().exec();

export const findFavouriteById = async (uid) => FavouriteModel.findById(uid);

export const createFavourite = async (favourite) => FavouriteModel.create(favourite);

export const deleteFavouriteById = async (fid) => FavouriteModel.deleteOne({_id: fid});

export const deleteFavouriteByUser = async (uid, mid) => FavouriteModel.deleteOne({userID: uid, movieID: mid});

export const findFavouriteByUser = async(uid) => FavouriteModel.find({ userID: uid });

