import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use("/users", async (req, res) => {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  res.json(users);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
