import mongoose from 'mongoose';

const schema = mongoose.Schema({
                                   userID: String,
                                   movieID: String
                               }, {collection: 'favourites'});
export default schema;