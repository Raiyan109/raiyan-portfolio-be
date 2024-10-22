import { Router } from 'express';
import { BlogRoutes } from '../modules/blog/blog.route';
import { BioRoutes } from '../modules/bio/bio.route';


const router = Router();

const moduleRoutes = [
    {
        path: '/blog',
        route: BlogRoutes,
    },
    {
        path: '/bio',
        route: BioRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;