// 此处处理各个不同的model之间的关系并且生成数据表（如有必要）
import Mysql from '../config/db'
import User from './user'
import UserInfo from './user_info'

UserInfo.belongsTo(User,{foreignKey:'user_uuid'});
//基于sequelize自动创建表
// 【！！注意 首次执行完请注释掉该段代码 ！！】
// Mysql.sync({
//     force: true,//是否清空数据库表
// }).then(function(err) {
//     console.log('mysql初始化成功');
//     console.log('mysql连接成功');       
// });

export default {
    User,
    UserInfo
}