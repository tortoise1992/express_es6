//引入框架
import Sequelize from 'sequelize'
//初始化链接（支持连接池）
let sequelize = new Sequelize('ahui', 'root', '123456',  {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }, 
});

export default sequelize