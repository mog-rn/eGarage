/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "garages" DROP CONSTRAINT "garages_garage_id_fkey";

-- AlterTable
ALTER TABLE "garages" ADD COLUMN     "added_by_id" INTEGER;

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "firstname" VARCHAR,
    "lastname" VARCHAR,
    "email" VARCHAR(255),
    "password" VARCHAR,
    "profileimg" VARCHAR,
    "role" "Role" NOT NULL DEFAULT 'AUTOMOBILE_USER',
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "garages" ADD CONSTRAINT "garages_added_by_id_fkey" FOREIGN KEY ("added_by_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
