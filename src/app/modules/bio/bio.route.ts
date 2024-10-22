import express from 'express';
import { BioControllers } from './bio.controller';


const router = express.Router();

router.post(
    '/skill',
    BioControllers.createSkill,
);

router.put(
    '/skill/:id',

    BioControllers.updateSkill,
);

router.delete('/skill/:id', BioControllers.deleteSkill);

router.get(
    '/skill/:id',
    BioControllers.getSingleSkill,
);

router.get(
    '/skill',
    BioControllers.getAllSkills,
);






export const BioRoutes = router;