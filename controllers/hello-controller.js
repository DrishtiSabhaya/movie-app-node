const HelloController = (app) => {
    app.get('/hello', (req, res) => {res.send('Hello World!')});
    app.get('/', (req, res) => {res.send('Welcome!')});
};

export default HelloController;