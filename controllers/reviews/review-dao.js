import ReviewModel from "./review-model.js";

export const createReview = async (review) => ReviewModel.create(review);

export const deleteReviewById = async (rid) => ReviewModel.deleteOne({_id: rid});

export const findReviewsByUser = async(uid) => ReviewModel.find({ userID: uid });

export const findReviewsByMovie = async(mid) => ReviewModel.find({ movieID: mid });

export const updateReview = async (rid, review) => ReviewModel.updateOne({_id: rid}, {$set: review});