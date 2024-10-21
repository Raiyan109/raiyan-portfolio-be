import express from 'express';
import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post(
    '/',
    BlogControllers.createBlog,
);

router.put(
    '/:id',

    BlogControllers.updateBlog,
);

router.delete('/:id', BlogControllers.deleteBlog);

router.get(
    '/:id',
    BlogControllers.getSingleBlog,
);

router.get(
    '/',
    BlogControllers.getAllBlogs,
);






export const BlogRoutes = router;