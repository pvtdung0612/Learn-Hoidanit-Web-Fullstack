import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);

  router.get("/crud-account", homeController.getCRUDAccount);
  router.post("/post-crud-account", homeController.postCRUDAccount);
  router.get("/get-crud-account", homeController.displayGetCRUDAccount);

  return app.use("/", router);
};

module.exports = initWebRoute;
