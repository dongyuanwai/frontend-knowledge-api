import { verify } from "../../utils/auth";
import {Context, Next } from "koa";

function AuthMiddleware(ctx:Context,next:Next){
    const token = ctx.request.headers.authorization;
    if(token !== undefined && token !==""){
        const {error} =   verify(token)
        if(error !==null){
            ctx.body = {
                msg: error.message,
                code: 4000
            }
            return
        }else{
            return next()
        }
    }else{
        ctx.body = {
            msg: "token 不能为空",
            code: 401
        }
        return
    }
}
export default AuthMiddleware