import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import { Prisma } from "@prisma/client";

export const addTours = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date, created_AT, price } = req.body;
  console.log("123123", "897987", req.body);

  const tours = await prismaClient.tours.create({
    data: {
      ...req.body,
      date: new Date(date),
      price: new Prisma.Decimal(price),
    },
  });

  res.json(tours);
};
