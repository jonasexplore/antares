/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

import { AppException, ERRORS, HttpStatusCodes } from '@shared/errors';

export function interceptorError(
  error: Error,
  request: Request,
  response: Response,
  _next: NextFunction,
): Response {
  if (error instanceof AppException) {
    return response
      .status(error.statusCode)
      .json({ message: error.message, errorCode: error.errorCode });
  }

  return response
    .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: error.message, errorCode: ERRORS.INTERNAL_SERVER_ERROR });
}
