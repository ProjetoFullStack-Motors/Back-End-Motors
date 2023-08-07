import { Router } from "express";

const salesAd: Router = Router();

salesAd.post("", () =>  console.log("salesAd post"));
salesAd.get("", () =>  console.log("salesAd get"));
salesAd.get("/:id", () =>  console.log("salesAd get by id"));
salesAd.patch("/:id", () =>  console.log("salesAd post"));
salesAd.delete("/:id", () =>  console.log("salesAd delete"));

salesAd.post("/:salesAdId/images", () =>  console.log("salesImages post"));
salesAd.patch("/:salesAdId/images", () =>  console.log("salesImages patch"));

export default salesAd;