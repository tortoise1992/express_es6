export default (req,res,next)=>{
    // 判断是否存在session并且是否是登录接口
    // console.log(req.path)
    // && req.path !=='/api/login'
    if(!req.session.user && req.path !=='/api/login'){
        
        return res.json({
        'code':401,
        'msg':'请重新登录',
        'obj':null
        })
    }
    return next()
}