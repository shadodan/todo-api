import { body } from 'express-validator';

export const createUserValidator = [
  body('username').isString(),
  body('email').isEmail(),
  body('password').isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }),
  body('phone').isMobilePhone('pt-BR'),
];
