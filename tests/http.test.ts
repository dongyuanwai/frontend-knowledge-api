import run from '../app'
import request from 'supertest'
import { Server } from 'http';

describe('http',()=>{
    let server:Server
    beforeAll(()=>{
        server = run(3005)
    })
    it('GET /',()=>{
        return request(server)
            .get("/")
            .expect(200)
            .then((response)=>{
                // 对返回结果进行测试
                expect(response.body).toStrictEqual([1,2,3,5,6,7])
            })
    })

    afterAll(()=>{
        server.close()
    })
})



