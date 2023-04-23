import mongoose from 'mongoose';
import ratingSchema from './rating-schema.js'
const ratingModel = mongoose.model('RatingModel', ratingSchema);

export default ratingModel;