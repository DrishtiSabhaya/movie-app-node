import * as userDao from './user-dao.js'

const UserController = (app) => {
    app.post('/api/users', createUser);
    app.get('/api/users', findUsers);
    app.get('/api/users/:uid', findUserById);
    app.put('/api/users/:uid', updateUser);
    app.delete('/api/users/:uid', deleteUser);
}

const createUser = async (req, res) => {
    const newUser = req.body;
    const insertedUser = await userDao.createUser(newUser);
    res.json(insertedUser);
}

const findUsers  = async (req, res) => {
    const users = await userDao.findAllUsers()
    res.json(users);
}

const findUserById  = async (req, res) => {
    const user = await userDao.findUserById(req.params.uid);
    res.json(user);
}

const updateUser = async (req, res) => {
    const userIdToUpdate = req.params.uid;
    const updates = req.body;
    const status = await userDao.updateUser(userIdToUpdate, updates);
    res.json(status);
}

const deleteUser = async (req, res) => {
    const userIdToDelete = req.params.uid;
    const status = await userDao.deleteUser(userIdToDelete);
    res.json(status);
}

export default UserController;