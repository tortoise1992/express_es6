import {Router} from 'express'
let router=Router()
router.post('/login', function(req, res, next) {
    res.render('index', { title: 'ahui' });
});
router.post('/register', function(req, res, next) {
    res.render('index', { title: 'ahui' });
});
export default router