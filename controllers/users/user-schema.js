import mongoose from 'mongoose';

const schema = mongoose.Schema({
    username: String, password: String,
    firstName: String, lastName: String, profilePhoto: String, dob: Date,
    email: String,
    genre: String,
    createdAt: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false },
    role: {
        type: String,
        default: "user",
        enum: ["admin", "user", "guest", "reviewer"],
    },
}, {collection: 'users'});
export default schema;