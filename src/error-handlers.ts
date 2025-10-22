import { NextFunction, Response, Request } from "express";
import { ErrorCode, HTTPErrorException } from "./exceptions/root";
import { InternalException } from "./exceptions/internal-error";

export const errorHandlers = (method: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next);
    } catch (error: any) {
      let exception: HTTPErrorException;
      if (error instanceof HTTPErrorException) {
        exception = error;
      } else {
        exception = new InternalException(
          "Internal Error",
          error,
          ErrorCode.INTERNAL_ERROR
        );
      }
      next(exception);
    }
  };
};
