module.exports = (express) => {
    const controller = require('../controller/quiz')();
    const router = express.Router();
    router.get('/quiz', (req, res, next)=>controller.get(req, res, next));
    router.post('/quiz', (req, res, next)=>controller.post(req, res, next));
    return router;
};
