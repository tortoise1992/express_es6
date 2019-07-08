import sequelize from '../config/db'
import Sequelize from 'sequelize'
// 创建model，定义数据表结构
var User = sequelize.define('user_info', {
    uuid: {
        type: Sequelize.UUID,//设置类型
        allowNull: false,//是否允许为空
        primaryKey: true,//主键
        defaultValue: Sequelize.UUIDV1,//默认值
    }, 
    'user_uuid':{
        type: Sequelize.UUID,
        allowNull: false,
    },
    email: { //邮箱
        type: Sequelize.STRING,
        unique: true, //唯一
        validate: {//设置验证条件
            isEmail: true,// 检测邮箱格式 (foo@bar.com)
        },
    },
    nickname:{
        type: Sequelize.STRING,
    },
    sex:{
        type: Sequelize.STRING,
    },
    avatar:{
        type: Sequelize.STRING,
    },
    address:{
        type: Sequelize.STRING,
    }
     
}, {    
    freezeTableName: true
});

export default User