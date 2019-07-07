import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import publicRoute from './routes/publicRoute'
import privateRoute from './routes/privateRoute'

let app = express();

// 加载模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 加载常用配置项
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
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
