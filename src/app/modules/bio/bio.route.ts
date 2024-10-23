import express from 'express';
import { BioControllers } from './bio.controller';


const router = express.Router();


// Skills

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


// Projects
router.post(
    '/project',
    BioControllers.createProject,
);

router.get(
    '/project',
    BioControllers.getAllProjects,
);




export const BioRoutes = router;