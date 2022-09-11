/*
  Warnings:

  - You are about to drop the column `address` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `hours` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `lat` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `lng` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `services` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `garages` table. All the data in the column will be lost.
  - You are about to drop the column `zip` on the `garages` table. All the data in the column will be lost.
  - Added the required column `body` to the `garages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `garages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `garages` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_garages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "garages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_garages" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "garages";
DROP TABLE "garages";
ALTER TABLE "new_garages" RENAME TO "garages";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
