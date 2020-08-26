import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionscontroller = new ConnectionsController();


routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);
routes.post('/connections', connectionscontroller.create);
routes.get('/connections', connectionscontroller.index);

export default routes;