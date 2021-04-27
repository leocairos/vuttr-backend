import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import '@shared/infra/typeorm';
import '@shared/container';

import { AppError } from '@shared/errors/AppError';
import { router } from '@shared/infra/http/routes';

import swaggerFile from '../../../swagger.json';

const app = express();

app.use(express.json());

const options = {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'VUTRR API',
  customfavIcon: '/assets/favicon.ico',
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile, options));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(3000, () => console.log('Server is running!'));
