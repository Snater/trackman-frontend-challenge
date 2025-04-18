import {Router} from 'express';
import {facilities} from '../controllers/facilitiesController';
import {facility} from '../controllers/facilityController';

const router = Router();

router.get('/facilities', facilities);

router.post('/facility', facility);

export default router;
