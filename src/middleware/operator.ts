import { NextFunction, Request, Response } from "express";
import { UNAuthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import { NotFoundException } from "../exceptions/not-found";

export const operator = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;
  if (!user) {
    next(new NotFoundException("User Not Found", ErrorCode.USER_NOT_FOUND));
  } else {
    if (user.role == "OPERATOR") {
      next();
    } else {
      next(
        new UNAuthorizedException(
          "Unauthorized User",
          ErrorCode.UNUTHORIZED_ERROR
        )
      );
    }
  }
};
