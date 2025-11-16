/*
  Warnings:

  - The `perks` column on the `tours` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "tours" DROP COLUMN "perks",
ADD COLUMN     "perks" TEXT[];
