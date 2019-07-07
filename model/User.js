import sequelize from '../config/db'
import Sequelize from 'sequelize'
// 创建model，定义数据表结构
var User = sequelize.define('user', {
    'id' : {
        type : Sequelize.INTEGER, 
        autoIncrement : true, 
        primaryKey : true, 
        unique : true
    },
    'username': {
        type: Sequelize.STRING, // 指定值的类型       
    },
    // 没有指定 field，表中键名称则与对象键名相同，为 email
    'password': {
        type: Sequelize.STRING
    },
    'email':{
        type: Sequelize.STRING
    }
}, {    
    freezeTableName: true
});

export default User