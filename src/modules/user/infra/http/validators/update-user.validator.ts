import { body } from 'express-validator';

export const updateUserValidator = [
  body('username').isString().optional(),
  body('email').isEmpty(),
  body('phone').isEmpty(),
  body('password').isEmpty(),
];
