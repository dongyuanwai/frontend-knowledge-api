import { Context } from "koa";
import logger from "../logger"
import KnowledgeService from "../service/KnowledgeService";
class IndexController {
    async index(ctx: Context){
        // logger.info("msg",'msg')
        const admin =  await KnowledgeService.getKnowledge()
        ctx.body = admin
    }
}


export default new IndexController()