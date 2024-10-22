"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_route_1 = require("../modules/blog/blog.route");
const bio_route_1 = require("../modules/bio/bio.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/blog',
        route: blog_route_1.BlogRoutes,
    },
    {
        path: '/bio',
        route: bio_route_1.BioRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
