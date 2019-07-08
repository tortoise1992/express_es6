import {User} from '../model'

// 导出model对应的操作方法
export default {
    login(param){
        return User.findOne(
            {
                where:param
            }
        )
    }
}