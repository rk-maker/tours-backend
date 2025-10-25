/*
  Warnings:

  - The primary key for the `tours` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_AT` on the `tours` table. All the data in the column will be lost.
  - The `id` column on the `tours` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "tours" DROP CONSTRAINT "tours_pkey",
DROP COLUMN "created_AT",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "tours_pkey" PRIMARY KEY ("id");
