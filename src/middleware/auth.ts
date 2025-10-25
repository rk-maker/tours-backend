import { NextFunction, Request, Response } from "express";
import { UNAuthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import * as jwt from "jsonwebtoken";
import { JWT_TOKEN } from "../sevrets";
import { prismaClient } from "..";
const authMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //NOTE:extract token from header
  const token = req.headers.authorization;
  //NOTE:if token is not present, throw an error of unauthorized
  if (!token) {
    next(
      new UNAuthorizedException(
        "Unauthorized user",
        ErrorCode.UNUTHORIZED_ERROR
      )
    );
  } else {
    try {
      //NOTE:if the token is present , verufy the token and extract the apyload
      const payload = jwt.verify(token, JWT_TOKEN) as any;
      //NOTE:to get the user from the paytlod
      const user = await prismaClient.user.findFirst({
        where: { id: payload.userId },
      });
      if (!user) {
        next(
          new UNAuthorizedException(
            "Unauthorized user",
            ErrorCode.UNUTHORIZED_ERROR
          )
        );
      } else {
        req.user = user;
      }
      //NOTE:to tattach the user to the current request object
      next();
    } catch (error) {
      next(
        new UNAuthorizedException(
          "Unauthorized user",
          ErrorCode.UNUTHORIZED_ERROR
        )
      );
    }
  }
};
export default authMiddleWare;
