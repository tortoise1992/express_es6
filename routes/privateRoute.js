import {Router} from 'express'
let router=Router()
router.get('/api', function(req, res, next) {
    res.render('index', { title: 'hello' });
});
export default router