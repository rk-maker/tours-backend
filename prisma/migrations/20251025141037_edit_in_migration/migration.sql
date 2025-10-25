/*
  Warnings:

  - Added the required column `perks` to the `tours` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tours" ADD COLUMN     "perks" TEXT NOT NULL;
