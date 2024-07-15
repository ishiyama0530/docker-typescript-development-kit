import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

app.use("/hello", async (req, res) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findFirst();
  res.send("helloworld: " + user?.name)
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
