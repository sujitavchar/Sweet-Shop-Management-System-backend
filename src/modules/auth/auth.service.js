import prisma from "../../database/client.js";
import { hashPassword, comparePassword } from "../../utils/bcrypt.js";
import { generateToken } from "../../utils/jwt.js";

export const register = async ({ email, password }) => {
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) throw new Error("User already exists");

  const hashedPassword = await  hashPassword(password);

  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  });

  const token = generateToken(user);
  return { token };
};

export const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid credentials");

  const match = await comparePassword(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  const token = generateToken(user);
  return { token };
};
