import prisma from "../../database/client.js";

export const createSweet = async ({ name, category, price, quantity }) => {
  if (!name || !category || !price || !quantity) {
    throw new Error("All fields are required");
  }

  return await prisma.sweet.create({
    data: { name, category, price, quantity },
  });
};

export const getAllSweets = async () => {
  return await prisma.sweet.findMany({
    orderBy: { id: "asc" },
  });
};

export const searchSweets = async (query) => {
  return await prisma.sweet.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { category: { contains: query, mode: "insensitive" } },
      ],
    },
  });
};

export const updateSweet = async (id, data) => {
  const exists = await prisma.sweet.findUnique({ where: { id } });
  if (!exists) throw new Error("Sweet not found");

  return await prisma.sweet.update({
    where: { id },
    data,
  });
};

export const deleteSweet = async (id) => {
  const exists = await prisma.sweet.findUnique({ where: { id } });
  if (!exists) throw new Error("Sweet not found");

  await prisma.sweet.delete({ where: { id } });
};
