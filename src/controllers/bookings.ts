import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import { BadRequestExceptionError } from "../exceptions/bad-requests";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";
import { success } from "zod";

export const addBookings = async (req: Request, res: Response) => {
  const { fromDate, toDate } = req.body;
  const booking = await prismaClient.bookings.create({
    data: {
      ...req.body,
      fromDate: new Date(fromDate),
      toDate: new Date(toDate),
    },
  });
  res.json(booking);
};

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const booking = req.body;
    const updatebooking = await prismaClient.bookings.update({
      where: { id: +req.body.booking.id },
      data: booking,
    });

    res.json(updatebooking);
  } catch (error) {
    throw new NotFoundException(
      "Booking not Found!",
      ErrorCode.BOOKING_NOT_FOUND
    );
  }
};

export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const bookingid = req.params.id;
    const booking = await prismaClient.bookings.delete({
      where: { id: +bookingid },
    });
    res.json({ success: true });
  } catch (error) {
    throw new NotFoundException(
      "Booking Not Found",
      ErrorCode.BOOKING_NOT_FOUND
    );
  }
};
export const getAllBookings = async (req: Request, res: Response) => {
  const user: any = req.user;
  const bookings = await prismaClient.bookings.findMany({
    where: { user_id: user.id },
    include: { tour: true },
  });
  res.json({ bookings });
};
