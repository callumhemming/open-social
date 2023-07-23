import express, { Router } from "express";
import {getAllUsers} from "../models"

const router: Router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.json(await getAllUsers())
});

export default router;
