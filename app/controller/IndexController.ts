import { Context } from "koa";
import logger from "../logger"
import AdminService from "../service/AdminService";
class IndexController {
    async index(ctx: Context){
        // logger.info("msg",'msg')
        // const admin =  await AdminService.getAdmin()
        ctx.body = {
            status:300,
            msg:"路由错误,请检查"
        }
    }
}


export default new IndexController()