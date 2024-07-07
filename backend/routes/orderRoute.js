// Package Express Connection
import express from 'express';
// Middleware Connection
import authMiddleware from '../middleware/auth.js';
// Order Controller Connection
import {
  placeOrder,
  verifyOrder,
  userOrders,
} from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place', authMiddleware, placeOrder);
orderRouter.post('/verify', verifyOrder);
orderRouter.post('/userorders', authMiddleware, userOrders);

export default orderRouter;
