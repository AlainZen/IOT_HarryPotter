import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();


const getUser = async (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, process.env.JWT_SECRET,(error, decoded) => {
        if (error) {
            res.status(401).json({ message: 'Unauthorized' });
        }
        prisma.user.findUnique({
            where: {
                id: decoded.id,
            },
        })
        .then((user) => {
            res.json(user);
            console.log(user);
        })
        .catch((error) => {
            res.json(error);
        });
    });
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const user = prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    if (user === null) {
      return res.status(404).send("User not found");
    }

    await prisma.user.update({
      where: { id: parseInt(id) },
      data: body,
    });

    return res.status(200).send(user);
  };

export { getUser, updateUser };
