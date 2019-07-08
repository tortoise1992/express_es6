import sequelize from '../config/db'
import Sequelize from 'sequelize'
// 创建model，定义数据表结构
var User = sequelize.define('user', {
    uuid: {
        type: Sequelize.UUID,//设置类型
        allowNull: false,//是否允许为空
        primaryKey: true,//主键
        defaultValue: Sequelize.UUIDV1,//默认值
    },    
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, //唯一    
    },    
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },    
}, {    
    freezeTableName: true
});

export default User