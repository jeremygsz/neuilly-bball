-- CreateTable
CREATE TABLE "training_center_request" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(100) NOT NULL,
    "lastname" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20),
    "club" VARCHAR(255) NOT NULL,
    "league" VARCHAR(255) NOT NULL,
    "dates" VARCHAR(255) NOT NULL,
    "playersCount" VARCHAR(50) NOT NULL,
    "objectives" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "services" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "projectDescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "training_center_request_pkey" PRIMARY KEY ("id")
);
