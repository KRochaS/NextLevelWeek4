import { Router } from 'express';
import { SendMailController } from './controllers/SendMail.controller';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const useController = new UserController();
const surveysController = new SurveysController();

const sendMailController = new SendMailController();

router.post("/users", useController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post('/sendMail', sendMailController.execute)

export { router };