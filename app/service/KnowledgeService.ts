import { Knowledge } from "../model/Knowledge";

class KnowledgeService {
    getKnowledge(){
        return Knowledge.findAll()
    }
    getAdminById(id:number){
        // findByPk是从主键查找
        return Knowledge.findByPk(id)
    }
    
}

export default new KnowledgeService