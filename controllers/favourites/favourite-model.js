import mongoose from 'mongoose';
import favouriteSchema from './favourite-schema.js'
const favouriteModel = mongoose.model('FavouriteModel', favouriteSchema);

export default favouriteModel;