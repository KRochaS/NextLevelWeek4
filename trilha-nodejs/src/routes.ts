import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';
import { SendMailController } from './controllers/SendMail.controller';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const useController = new UserController();
const surveysController = new SurveysController();

const sendMailController = new SendMailController();

const answerController = new AnswerController();

const npsController = new NpsController();

router.post("/users", useController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailController.execute);

router.get("/answers/:value", answerController.execute);

router.get('/nps/:survey_id', npsController.execute)

export { router };