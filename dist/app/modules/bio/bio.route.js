"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BioRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bio_controller_1 = require("./bio.controller");
const router = express_1.default.Router();
router.post('/skill', bio_controller_1.BioControllers.createSkill);
router.put('/skill/:id', bio_controller_1.BioControllers.updateSkill);
router.delete('/skill/:id', bio_controller_1.BioControllers.deleteSkill);
router.get('/skill/:id', bio_controller_1.BioControllers.getSingleSkill);
router.get('/skill', bio_controller_1.BioControllers.getAllSkills);
exports.BioRoutes = router;
