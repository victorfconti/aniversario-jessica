module.exports = (express) => {
    const controller = require('../controller/index')();
    const router = express.Router();
    router.get('/', (req, res, next)=>controller.get(req, res, next));
    router.get('/begin', (req, res, next)=>controller.begin(req, res, next));
    return router;
};