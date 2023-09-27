-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('FEMALE', 'MALE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'DOCTOR', 'THERAPIST');

-- CreateTable
CREATE TABLE "User" (
    "userId" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "firstName" STRING NOT NULL,
    "lastName" STRING NOT NULL,
    "email" STRING NOT NULL,
    "password" STRING NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "hospitalNo" STRING NOT NULL,
    "sex" "Sex" NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,
    "height" DECIMAL(65,30) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_hospitalNo_key" ON "User"("hospitalNo");
