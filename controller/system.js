import UserService from '../service/user'
export const login=(req,res,next)=>{
    let param=req.body
    UserService.login(param).then(result=>{
        // console.log(result.dataValues)
        if(result){
            req.session.regenerate(err=>{
                if(!err){                    
                    // 登录成功
                    req.session.user=result.dataValues
                    return res.json({
                        'code':200,
                        'msg':'操作成功',
                        'obj':null
                    })
                }
                return res.json({
                    'code':400,
                    'msg':'操作失败',
                    'obj':null
                })
            })
            
        }else{
            // 登录失败
            res.json({
                'code':400,
                'msg':'操作失败',
                'obj':null
            })
        }
    })    
}
