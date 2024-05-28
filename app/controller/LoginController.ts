import { Context } from "koa";
import AdminService from "../service/AdminService";
import { sign } from "../../utils/auth";
import response from "../../utils/response";

class LoginController {
    async index(ctx: Context) {
        const admin = await AdminService.getAdminById(1)
        if(admin == null){
            return response.error(ctx,{} , '用户不存在')
        }
        const token = sign(admin)
        response.success(ctx,{token},"success")
    }
}

export default new LoginController