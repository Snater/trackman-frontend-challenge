import {facility, facilityDelete} from '../controllers/facilityController';
import {Router} from 'express';
import {facilities} from '../controllers/facilitiesController';

const router = Router();

router.get('/facilities', facilities);

router.post('/facility', facility);

router.delete('/facility', facilityDelete);

export default router;
