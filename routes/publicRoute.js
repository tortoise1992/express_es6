import {Router} from 'express'
import {login} from '../controller/system'
let router=Router()
router.post('/login', login);
router.post('/register', function(req, res, next) {
    res.render('index', { title: 'ahui' });
});
export default router