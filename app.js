import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import AuthenticationController from "./controllers/authentication-controller.js";
import SessionController from "./controllers/session-controller.js";
import UserController from "./controllers/users/user-controller.js";
import FavouriteController from "./controllers/favourites/favourite-controller.js";
import ReviewController from "./controllers/reviews/review-controller.js";
import cors from 'cors';
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from "express-session";

dotenv.config();

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';

mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(
    session({
                secret: "dvr",
                resave: false,
                saveUninitialized: true,
            })
);
app.use(
    cors({
             credentials: true,
             origin: "http://localhost:3000",
         })
);
app.use(express.json());

HelloController(app);
SessionController(app);
AuthenticationController(app);
UserController(app);
FavouriteController(app);
ReviewController(app);

app.listen(process.env.PORT || 4000);