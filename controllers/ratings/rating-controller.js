import * as ratingDao from './rating-dao.js'

const RatingController = (app) => {
    app.post('/api/rating', createRating);
    app.get('/api/rating/user/:uid', findRatingByUser);
    app.get('/api/rating/movie/:mid', findRatingByMovie);
    app.delete('/api/rating/:rid', deleteRatingById);
    app.put('/api/rating/:rid', updateRating);
    app.get('/api/rating/:uid/:mid', findRatingByUserandMovie);
    app.get('/api/movierating/:mid', findMovieRating);
}

const findMovieRating = async (req, res) => {
    console.log(req);
    const mid = req.params.mid;
    console.log("mid", mid);
    const response = await ratingDao.findRatingByMovie(mid);
    console.log("movie rating", response);
    let rating = 0;
    response.map( res => {
        rating += res.rating;
    })
    console.log("count", rating);
    rating = rating/response.length;
    return res.json(rating);
}

const createRating = async (req, res) => {
    const newRating = req.body;
    console.log("newRating", newRating);
    const userID = newRating.userID;
    const movieID = newRating.movieID;
    const response = await ratingDao.findRatingByUserandMovie(userID, movieID);
    let insertedRating;
    console.log("found rating ", response);
    if(response.length === 0) {
        insertedRating = await ratingDao.createRating(newRating);
    } else {
        const rid = response[0]._id;
        insertedRating = await ratingDao.updateRating(rid, newRating);
        console.log("updated rating",insertedRating);
    }
    res.json(insertedRating);
}

const findRatingByUser  = async (req, res) => {
    console.log("inside user", req.params.uid);
    const rating = await ratingDao.findRatingByUser(req.params.uid);
    res.json(rating);
}

const findRatingByMovie  = async (req, res) => {
    const rating = await ratingDao.findRatingByMovie(req.params.mid);
    res.json(rating);
}


const deleteRatingById = async (req, res) => {
    const ratingIdToDelete = req.params.rid;
    const status = await ratingDao.deleteRatingById(ratingIdToDelete);
    res.json(status);
}

const updateRating = async (req, res) => {
    const ratingIdToUpdate = req.params.rid;
    const updates = req.body;
    const status = await ratingDao.updateRating(ratingIdToUpdate, updates);
    res.json(status);
}

const findRatingByUserandMovie  = async (req, res) => {
    const rating = await ratingDao.findRatingByUserandMovie(req.params.uid, req.params.mid);
    res.json(rating);
}

export default RatingController;