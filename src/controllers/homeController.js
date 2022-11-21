import db from "../models";
import CRUDAccountService from "../services/CRUDAccountService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUDAccount = (req, res) => {
  return res.render("crud-account.ejs");
};

let postCRUDAccount = async (req, res) => {
  let message = await CRUDAccountService.createAccount(req.body);
  console.log(message);
  return res.send("post crud from server");
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUDAccount: getCRUDAccount,
  postCRUDAccount: postCRUDAccount,
};
