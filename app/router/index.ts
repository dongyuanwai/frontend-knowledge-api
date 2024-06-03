import KoaRouter from 'koa-router'
import IndexController from '../controller/IndexController'
import KnowledgeListController from '../controller/KnowledgeListController'
import LoginController from '../controller/LoginController';
import AuthMiddleware from '../middleware/AuthMiddleware'
const router = new KoaRouter();
// router.get('/login',LoginController.index)
// router.use(AuthMiddleware)

router.get('/knowledgeList',KnowledgeListController.index)
export default router


