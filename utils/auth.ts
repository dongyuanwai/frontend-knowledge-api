import jwt from "jsonwebtoken";
import config from "../app/config";

function sign(data:any) {
    return jwt.sign({admin:data}, config.jwt.jwt_secret as string, { expiresIn: config.jwt.jwt_expire });
}

function verify(token:string) {
    try{
        let decoded = jwt.verify(token, config.jwt.jwt_secret);
        return {
            admin: decoded,
            error: null
        }
    }catch(err){
        return {
            admin: null,
            error: err
        }
    }
}


export {
    sign,
    verify
}


