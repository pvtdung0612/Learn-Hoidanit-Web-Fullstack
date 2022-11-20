import express from "express"
import homeController from "../controllers/homeController"

let router = express.Router();

let initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage)

    // router.get('/hello', (req, res) => {
    //     return res.send('hello dung')
    // });

    return app.use("/", router)
}

module.exports = initWebRoute;