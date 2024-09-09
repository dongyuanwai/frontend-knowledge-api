import { Knowledge } from "../model/Knowledge";

class KnowledgeService {
    getKnowledge(){
        return Knowledge.findAll()
    }
    getKnowledgeByTagId(tagId:any){
        console.log("这是tagId",tagId)
        // findByPk是从主键查找
        return Knowledge.findAll({
            where:{
                tagId:tagId
            }
        })
    }
    getKnowledgeById(id:number){
        // findByPk是从主键查找
        return Knowledge.findByPk(id)
    }
    createKnowledge(data:any){
        return Knowledge.create(data)
    }
    
}

export default new KnowledgeService