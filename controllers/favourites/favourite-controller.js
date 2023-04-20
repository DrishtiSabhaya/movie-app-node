import * as favouriteDao from './favourite-dao.js'

const FavouriteController = (app) => {
    app.post('/api/favourite', createFavourite);
    app.get('/api/favourite/:uid', findFavouriteByUser);
    app.delete('/api/favourite/:uid/:mid', deleteFavouriteByUser);
}

const createFavourite = async (req, res) => {
    const newFavourite = req.body;
    console.log(newFavourite);
    const insertedFavourite = await favouriteDao.createFavourite(newFavourite);
    res.json(insertedFavourite);
}

const findUsers  = async (req, res) => {
    const users = await favouriteDao.findAllUsers()
    res.json(users);
}

const findFavouriteByUser  = async (req, res) => {
    const favourites = await favouriteDao.findFavouriteByUser(req.params.uid);
    res.json(favourites);
}


const deleteFavouriteByUser = async (req, res) => {
    const userIdToDelete = req.params.uid;
    const movieIdToDelete = req.params.mid;
    const status = await favouriteDao.deleteFavouriteByUser(userIdToDelete, movieIdToDelete);
    res.json(status);
}

export default FavouriteController;