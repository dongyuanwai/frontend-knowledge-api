import KoaRouter from 'koa-router'
import IndexController from '../controller/IndexController'
import KnowledgeController from '../controller/KnowledgeController'
import LoginController from '../controller/LoginController';
import AuthMiddleware from '../middleware/AuthMiddleware'
const router = new KoaRouter();
// router.get('/login',LoginController.index)
// router.use(AuthMiddleware)

router.get('/',IndexController.index)
router.get('/getAll',KnowledgeController.getAll)
router.get('/getTypeQuestion',KnowledgeController.getTypeQuestion)
router.post('/knowledge',KnowledgeController.add)
export default router
