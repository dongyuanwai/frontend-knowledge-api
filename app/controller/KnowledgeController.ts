import { Context } from "koa";
import logger from "../logger"
import KnowledgeService from "../service/KnowledgeService";
import response from "../../utils/response";
import validate from "../../utils/validate";
import { Rules } from "async-validator";

class IndexController {
    async getAll(ctx: Context){
        console.log("获取所有数据")
        let data 
        try{
            data =  await KnowledgeService.getKnowledge()
        }catch(e){
            console.log("dkfjdkfj ",e)
        }
        
        ctx.body = {
            status:200,
            data:data
        }
    }

    async getTypeQuestion(ctx: Context){
        const parms = ctx.query
        console.log("获取某一种类型的问题",parms,parms.tagId)
        let data =[]
        let total = 0
        try{
            data =  await KnowledgeService.getKnowledgeByTagId(parms.tagId)
            if(data){
                total = data.length
            }
                
            ctx.body = {
                status:200,
                data:data,
                total:total
            }
        }catch(e){
            console.log("dkfjdkfj ",e)
            ctx.body = {
                status:400,
                data:[],
                msg:"获取失败"
            }
        }
        
    }

    async add(ctx: Context){
        // console.log("获取到的数据-=-=",ctx.request.body)
        
        interface Question {
            _id:string,
            title:string,
            explanation:string
            category:string,
            renderType:string,
            desc: string
            options: string
            level:number,
            tagId:number,
        }
        // 校验规则
        const rules:Rules = {
            title:[
                {
                    type:'string',
                    required:true,
                    message:'标题不能为空'
                }
            ],
            explanation:[
                {
                    type:'string',
                    required:true,
                    message:'答案不能为空'
                }
            ],
            tagId:[
                {
                    type:'string',
                    required:true,
                    message:'tagId不能为空'
                }
            ],
        }
        const { data, error} = await validate<Question>(ctx,rules)
        if(error){
            // return response.error(ctx,{} , error)
            console.log("数据校验失败----",ctx.request.body.title,ctx.request.body._id)
            ctx.body = {
                code:'0',
                error:error, 
                data:{}
            }
            return
        }
        
        const _data = ctx.request.body

        await KnowledgeService.createKnowledge({
            _id:_data._id,
            category:_data.category,
            renderType:_data.renderType,
            title:_data.title,
            explanation:_data.explanation,
            level:_data.level,
            tagId:_data.tagId,
        }).then(res=>{
            console.log("添加数据成功",_data.title,_data._id)
            ctx.body = {
                code:'1',
                error:null,
                data:{
                    msg:'添加成功'
                }
            }
        }).catch(err=>{
            console.log("添加失败-=-=-=",_data.title,_data._id,err)
            ctx.body = {
                code:'0',
                error:null,
                data:{
                    msg:'添加失败'
                }
            }
        })
        
    }
}


export default new IndexController()