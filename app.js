// import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import publicRoute from './routes/publicRoute'
import privateRoute from './routes/privateRoute'
import Session from 'express-session'
import SessionFile from 'session-file-store'
let FileStore = SessionFile(Session)
let app = express();

// 加载模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 加载常用配置项
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// session的配置
app.use(Session({
  name: 'sessionId',
  secret: 'ahuife',  // 用来对session id相关的cookie进行签名
  store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
  saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
  resave: false,  // 是否每次都重新保存会话，建议false
  cookie: {
      maxAge: 60 * 1000  // 有效期，单位是毫秒
  }
}));
app.use(express.static(path.join(__dirname, 'public')));

// 插入路由配置项，统一加路由前缀
app.use('/api', [publicRoute,privateRoute]);

// 封装404处理
app.use((req, res, next) => {
  res.status(404)
  return res.json({
    'code':404,
    'msg':'请求的资源无法找到',
    'obj':null
  })
});

// 统一错误处理
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  return res.json({
    'code':err.status || 500,
    'msg':'服务器内部错误',
    'obj':null
  });
});

export default app;
