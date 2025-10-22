import { NextFunction, Request, Response } from "express";
import { HTTPErrorException } from "../exceptions/root";

export const errorMessage = (
  error: HTTPErrorException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    errors: error.errors,
  });
};
