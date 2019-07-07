import {Router} from 'express'
import generateUserRoute from './router/user'
let router=Router()
generateUserRoute(router)
export default router