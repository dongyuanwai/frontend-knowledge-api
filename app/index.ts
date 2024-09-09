import Koa from 'koa';
// 获取配置文件一定要放到最上面
import dotenv from 'dotenv';
dotenv.config();

import router from './router';
import { Server } from 'http';
import AccessLogMiddleware from './middleware/AccessLogMiddleware';
// const bodyParser = require('koa-body');
import koaBody from 'koa-body';

import db from './db'
db()

const app = new Koa();
app.use(async (ctx, next) => {
    // 设置 CORS 响应头
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // 处理预检请求
    if (ctx.method === 'OPTIONS') {
      ctx.status = 204;
    } else {
      await next();
    }
})
app
    .use(koaBody({
        multipart: true,
        formidable: {
            maxFiles: 200*1024 * 1024
        }
    }))
    .use(AccessLogMiddleware)
    .use(router.routes())

const run = (port:any):Server =>{
    return app.listen(port)
}

export default run;