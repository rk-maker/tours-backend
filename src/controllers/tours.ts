import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import { Prisma } from "@prisma/client";

export const addTours = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date, created_AT, price } = req.body;

  const tours = await prismaClient.tours.create({
    data: {
      ...req.body,
      date: new Date(date),
      price: new Prisma.Decimal(price),
    },
  });

  res.json(tours);
};

export const getTours = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tours = await prismaClient.tours.findMany({
    orderBy: { createdAt: "desc" },
  });
  res.json(tours);
};
