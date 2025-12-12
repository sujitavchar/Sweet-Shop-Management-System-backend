import prisma from "../../database/client.js";

export const purchaseSweet = async (id, quantity) => {
  if (!quantity || quantity <= 0) {
    throw new Error("Quantity must be greater than zero");
  }

  const sweet = await prisma.sweet.findUnique({ where: { id } });
  if (!sweet) throw new Error("Sweet not found");

  if (sweet.quantity < quantity) {
    throw new Error("Not enough stock available");
  }

  const updated = await prisma.sweet.update({
    where: { id },
    data: {
      quantity: sweet.quantity - quantity,
    },
  });

  return {
    message: "Purchase successful",
    sweet: updated,
  };
};

export const restockSweet = async (id, quantity) => {
  if (!quantity || quantity <= 0) {
    throw new Error("Quantity must be greater than zero");
  }

  const sweet = await prisma.sweet.findUnique({ where: { id } });
  if (!sweet) throw new Error("Sweet not found");

  const updated = await prisma.sweet.update({
    where: { id },
    data: {
      quantity: sweet.quantity + quantity,
    },
  });

  return {
    message: "Restocked successfully",
    sweet: updated,
  };
};
