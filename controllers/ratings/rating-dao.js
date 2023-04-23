import RatingModel from "./rating-model.js";

export const createRating = async (rating) => RatingModel.create(rating);

export const deleteRatingById = async (rid) => RatingModel.deleteOne({_id: rid});

export const findRatingByUser = async(uid) => RatingModel.find({ userID: uid });

export const findRatingByMovie = async(mid) => RatingModel.find({ movieID: mid });

export const updateRating = async (rid, rating) => RatingModel.updateOne({_id: rid}, {$set: rating});

export const findRatingByUserandMovie = async(uid, mid) => RatingModel.find({ userID: uid, movieID: mid });