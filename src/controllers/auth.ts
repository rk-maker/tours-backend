import { NextFunction, Request, Response } from "express";
import { compareSync, hashSync } from "bcrypt";
import { prismaClient } from "..";
import * as jwt from "jsonwebtoken";
import { JWT_TOKEN } from "../sevrets";
import { BadRequestExceptionError } from "../exceptions/bad-requests";
import { ErrorCode } from "../exceptions/root";
import { UnprocessableEntity } from "../exceptions/validation";
import { signUpSchema } from "../schema/users";
import { NotFoundException } from "../exceptions/not-found";
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  signUpSchema.parse(req.body);
  const { email, password, name, role } = req.body;
  let user = await prismaClient.user.findFirst({ where: { email } });
  if (user) {
    next(
      new BadRequestExceptionError(
        "User Already Exist!",
        ErrorCode.USER_ALREADY_EXIST,
        null
      )
    );
  }

  user = await prismaClient.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10),
      role,
    },
  });
  res.json(user);
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  let user = await prismaClient.user.findFirst({ where: { email } });

  if (!user) {
    throw new NotFoundException("User Not found ", ErrorCode.USER_NOT_FOUND);
  }
  if (!compareSync(password, user.password))
    throw new BadRequestExceptionError(
      "Incorrect Password",
      ErrorCode.INCORRRECT_PASSWORD,
      null
    );

  const token = jwt.sign(
    {
      userId: user.id,
    },
    JWT_TOKEN
  );
  res.json({ user, token });
};

export const me = async (req: Request, res: Response, next: NextFunction) => {
  res.json(req?.user);
};
