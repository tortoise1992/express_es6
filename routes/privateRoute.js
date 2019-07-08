import {Router} from 'express'
import generateUserRoute from './router/user'
let router=Router()
// 单独处理登出
router.post('/logout', function(req, res, next) {
    res.json({

    });
});
generateUserRoute(router)

export default router