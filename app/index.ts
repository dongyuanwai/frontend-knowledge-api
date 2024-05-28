import Koa from 'koa';
// 获取配置文件一定要放到最上面
import dotenv from 'dotenv';
dotenv.config();

import router from './router';
import { Server } from 'http';
import AccessLogMiddleware from './middleware/AccessLogMiddleware';


import db from './db'
db()

const app = new Koa();

app
    .use(AccessLogMiddleware)
    .use(router.routes())

const run = (port:any):Server =>{
    return app.listen(port)
}

export default run;