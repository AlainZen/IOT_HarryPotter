import express from "express";
import authRoutes from "./routes/authRoutes.js";
import user from "./routes/UserRoutes.js";

const router = express.Router();


let lastHouseVisited = ""; 

router.get("/", (req, res) => {
  res.json({ message: lastHouseVisited });
});

router.post("/", (req, res) => {
  lastHouseVisited = req.body.houseData; 
  res.json({ message: lastHouseVisited }); 
});

router.get("/age", (req, res) => {
  res.send([
    {
      name: "Harry Potter",
      age: 11,
    },
    {
      name: "Hermione Granger",
      age: 11,
    },
    {
      name: "Ron Weasley",
      age: 11,
    },
  ]);
});

router.use("/auth", authRoutes);
router.use("/user", user);

export default router;
