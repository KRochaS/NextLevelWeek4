import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const useController = new UserController();
const surveysController = new SurveysController();

router.post("/users", useController.create);

router.post("/surveys", surveysController.create);

export { router };