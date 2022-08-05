-- CreateTable
CREATE TABLE "garages" (
    "id" TEXT NOT NULL,
    "garage_name" TEXT NOT NULL,
    "garage_services" TEXT NOT NULL,
    "garage_location" TEXT NOT NULL,
    "garage_image" TEXT NOT NULL,
    "time_open" TIME NOT NULL,
    "time_close" TIME NOT NULL,
    "addedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "garages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "garages" ADD CONSTRAINT "garages_addedBy_fkey" FOREIGN KEY ("addedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
