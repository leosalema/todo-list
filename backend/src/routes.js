import {Router} from 'express';
import TodoController from './controller/TodoController';

const routes = Router ();

routes.get ('/', (req, res) => res.send ('Hello World'));
routes.get ('/todo', TodoController.index);
routes.get ('/todo/:id', TodoController.findId);
routes.post ('/todo', TodoController.create);
routes.put ('/todo/:id', TodoController.update);
routes.delete ('/todo/:id', TodoController.delete);

export default routes;
