import { Admin } from "../model/Admin";

class AdminService {
    getAdmin(){
        return Admin.findOne()
    }
    getAdminById(id:number){
        // findByPk是从主键查找
        return Admin.findByPk(id)
    }
    
}

export default new AdminService