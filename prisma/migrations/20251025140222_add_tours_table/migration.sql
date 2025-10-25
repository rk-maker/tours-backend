-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "tours" (
    "id" TEXT NOT NULL,
    "operator_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "capacity" INTEGER NOT NULL,
    "booked_count" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "created_AT" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tours_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tours" ADD CONSTRAINT "tours_operator_id_fkey" FOREIGN KEY ("operator_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
