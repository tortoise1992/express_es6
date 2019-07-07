import UserModel from '../model/User'
// 操作之前如果表不存在则根据model新建数据表
UserModel.sync({force:false}).then(function(){
    console.log("success");
}).catch(function(err){
    console.log("数据集新建失败")
})

// 导出model对应的操作方法
export default {
    login(param){
        return UserModel.findOne(
            {
                where:param
            }
        )
    }
}