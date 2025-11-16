import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import { Prisma } from "@prisma/client";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";
import { success } from "zod";
import { createTourSchema } from "../schema/tours";

export const addTours = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  createTourSchema.parse(req.body);
  const { date, price } = req.body;

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

export const updateTours = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tours = req.body;

    const updatedTours = await prismaClient.tours.update({
      where: { id: +req.body.tours.id },
      data: tours,
    });
    res.json(updatedTours);
  } catch (error) {
    throw new NotFoundException("Tour not found ", ErrorCode.TOURS_NOT_FOUND);
  }
};

export const deleteTour = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tourId = req.params.id;
    const deletedTour = await prismaClient.tours.delete({
      where: { id: +tourId },
    });

    res.json({ success: true });
  } catch (error) {
    throw new NotFoundException(
      "PRODUCT NOT FOUND ",
      ErrorCode.TOURS_NOT_FOUND
    );
  }
};

export const getTourByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tour = await prismaClient.tours.findFirstOrThrow({
      where: { id: +req.params.id },
      include: {
        operator: true,
      },
    });
    res.json(tour);
  } catch (error) {
    throw new NotFoundException("Tour not found ", ErrorCode.TOURS_NOT_FOUND);
  }
};
