import * as userDao from "../controllers/users/user-dao.js";
import bcrypt from 'bcrypt';
const saltRounds = 10;

const AuthenticationController = (app) => {

    const login = async (req, res) => {
        const user = req.body;
        const username = user.username;
        const password = user.password;
        const existingUser = await userDao.findUserByCredentials(username, password);
        // const match = await bcrypt.compare(password, existingUser.password);

        if (existingUser) {
            // existingUser.password = '*****';
            // @ts-ignore
            req.session['currentUser'] = existingUser;
            res.json(existingUser);
            console.log(req)
        } else {
            res.sendStatus(403);
        }
    }

    const register = async (req, res) => {
        const newUser = req.body;
        const password = newUser.password;
        // const hash = await bcrypt.hash(password, saltRounds);
        // newUser.password = hash;

        const existingUser = await userDao.findUserByUsername(req.body.username);
        if (existingUser.length != 0) {
            res.sendStatus(409);
            return;
        } else {
            const insertedUser = await userDao.createUser(newUser);
            // insertedUser.password = '';
            // @ts-ignore
            req.session['currentUser'] = insertedUser;
            res.json(insertedUser);
        }
    }

    const profile = (req, res) => {
        // @ts-ignore
        const profile = req.session['currentUser'];
        if (profile) {
            res.json(profile);
        } else {
            res.sendStatus(403);
        }
    }

    const logout = (req, res) => {
        // @ts-ignore
        req.session.destroy();
        res.sendStatus(200);
    }

    const update = async (req, res) => {
        const newUser = req.body;
        const newId = await userDao.findUserById(newUser._id);
        if(newId !== null) {
            const user = await userDao.updateUser(newUser._id, newUser);
            const newuser = await userDao.findUserById(newUser._id);
            req.session['currentUser'] = newuser;
            res.json(user);
        } else {
            res.sendStatus(409);
            return;
        }
    }

    app.post("/api/users/register", register);
    app.post("/api/users/login",    login);
    app.post("/api/users/profile",  profile);
    app.post("/api/users/logout",   logout);
    app.post("/api/users/update",   update);
}

export default AuthenticationController;