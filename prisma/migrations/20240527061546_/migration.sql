/*
  Warnings:

  - Made the column `updated_at` on table `task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "task" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "updated_at" SET NOT NULL;
