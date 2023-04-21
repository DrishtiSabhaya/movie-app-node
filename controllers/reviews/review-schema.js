import mongoose from 'mongoose';

const schema = mongoose.Schema({   userID: String,
                                   movieID: String,
                                   review: String
                               }, {collection: 'reviews'});
export default schema;