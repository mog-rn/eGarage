-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'AUTOMOBILE_USER', 'GARAGE_OWNER');

-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "firstname" VARCHAR,
    "lastname" VARCHAR,
    "email" VARCHAR,
    "password" VARCHAR,
    "profileimg" VARCHAR,
    "role" "Role" NOT NULL DEFAULT 'AUTOMOBILE_USER',
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "garages" (
    "garage_id" SERIAL NOT NULL,
    "garage_name" VARCHAR,
    "garage_services" VARCHAR,
    "garage_location" VARCHAR,
    "garage_phone" VARCHAR,
    "garage_email" VARCHAR,
    "garage_website" VARCHAR,
    "time_open" TIME,
    "time_close" TIME,
    "garage_image" VARCHAR,
    "garage_description" VARCHAR,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "garages_pkey" PRIMARY KEY ("garage_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "garages" ADD CONSTRAINT "garages_garage_id_fkey" FOREIGN KEY ("garage_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
