import express from 'express';
import { getCourses, getCourseById, getCategories, getInstitutions } from '../controllers/courseController';

const router = express.Router();

// Publicly accessible routes for discovery
router.get('/', getCourses);
router.get('/categories', getCategories);
router.get('/institutions', getInstitutions);
router.get('/:id', getCourseById);

export default router;
