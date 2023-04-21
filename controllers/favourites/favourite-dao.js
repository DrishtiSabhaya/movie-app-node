import FavouriteModel from "./favourite-model.js";

export const createFavourite = async (favourite) => FavouriteModel.create(favourite);

export const deleteFavouriteById = async (fid) => FavouriteModel.deleteOne({_id: fid});

export const deleteFavouriteByUser = async (uid, mid) => FavouriteModel.deleteOne({userID: uid, movieID: mid});

export const findFavouriteByUser = async(uid) => FavouriteModel.find({ userID: uid });

export const findFavouriteByUserandMovie = async(uid, mid) => FavouriteModel.find({ userID: uid, movieID: mid });