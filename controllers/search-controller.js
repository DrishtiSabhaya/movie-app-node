import axios from "axios";

const SearchController = (app) => {
    const omdbApiKey = "dfe6d885";
    const tmdbApiKey = "0d0e5e0e7c64ee865ffaf322789a7bda";
    const omdbUrl = "http://www.omdbapi.com";
    const tmdbUrl = "https://api.themoviedb.org/3";

    const searchMovies = async (req, res) => {
        const { criteria } = req.query;

        if (!criteria || criteria == "") {
            const results = await axios.get(`${tmdbUrl}/movie/popular`, {
                params: {
                    api_key: tmdbApiKey,
                    language: "en-US"
                }
            })
            res.json(results.data);
        } else {
            const results = await axios.get(omdbUrl, {
                params: {
                    apiKey: omdbApiKey,
                    s: criteria
                }
            })
            res.json(results.data);
        }
    }

    const getMovieById = async (req, res) => {
        const { id } = req.params;
        const results = await axios.get(omdbUrl, {
            params: {
                apiKey: omdbApiKey,
                i: id
            }
        })
        res.json(results.data);
    }

    app.get("/api/search", searchMovies);
    app.get("/api/movie/{id}", getMovieById);

}

export default SearchController;