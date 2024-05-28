import { Context } from "koa";
import logger from "../logger"
import AdminService from "../service/AdminService";
class IndexController {
    async index(ctx: Context){
        // logger.info("msg",'msg')
        const admin =  await AdminService.getAdmin()
        ctx.body = admin
    }
}


export default new IndexController()