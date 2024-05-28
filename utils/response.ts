import { Context } from "koa";

// 封装统一的返回结果
function success(ctx:Context,data:any=[],msg:string='success',code:number=0){
    ctx.body = {
        code,
        msg,
        data
    }
}

function error(ctx:Context,data:any=[],msg:string='error',code:number=1){
    ctx.body = {
        code,
        msg,
        data
    }
}
export default {
    success,
    error
}