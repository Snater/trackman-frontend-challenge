import {Router} from 'express';
import {facilities} from '../controllers/facilitiesController';

const router = Router();

router.get('/facilities', facilities);

export default router;
