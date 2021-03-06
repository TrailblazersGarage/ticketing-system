import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

const router = express.Router();

router.post('/api/users/signup/:id', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({ min:4, max: 20 })
        .withMessage('Password must be between 4 and 20 characters')
], async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // Throw exception
        next(new RequestValidationError(errors.array()));
    }

    const { email, password } = req.body;

    console.log('Creating a user...');
    // Temporarily - test our new ErrorHandler middleware
    throw new DatabaseConnectionError();

    res.send({});
});

export { router as signupRouter };
