import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.$connect();
});

beforeEach(async () => {
  await prisma.user.deleteMany();
  await prisma.sweet.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});