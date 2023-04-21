import * as reviewDao from './review-dao.js'

const ReviewController = (app) => {
    app.post('/api/review', createReview);
    app.get('/api/review/user/:uid', findReviewsByUser);
    app.get('/api/review/movie/:mid', findReviewsByMovie);
    app.delete('/api/review/:rid', deleteReviewById);
    app.put('/api/review/:rid', updateReview);
}

const createReview = async (req, res) => {
    const newReview = req.body;
    console.log(newReview);
    const insertedReview = await reviewDao.createReview(newReview);
    res.json(insertedReview);
}

const findReviewsByUser  = async (req, res) => {
    const reviews = await reviewDao.findReviewsByUser(req.params.uid)
    res.json(reviews);
}

const findReviewsByMovie  = async (req, res) => {
    const reviews = await reviewDao.findReviewsByMovie(req.params.mid);
    res.json(reviews);
}


const deleteReviewById = async (req, res) => {
    const reviewIdToDelete = req.params.rid;
    const status = await reviewDao.deleteReviewById(reviewIdToDelete);
    res.json(status);
}

const updateReview = async (req, res) => {
    const reviewIdToUpdate = req.params.rid;
    const updates = req.body;
    const status = await reviewDao.updateReview(reviewIdToUpdate, updates);
    res.json(status);
}

export default ReviewController;