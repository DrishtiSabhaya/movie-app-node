import mongoose from 'mongoose';

const schema = mongoose.Schema({   userID: String,
                                   movieID: String,
                                   rating: Number
                               }, {collection: 'ratings'});
export default schema;