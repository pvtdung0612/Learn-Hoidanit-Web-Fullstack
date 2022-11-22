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
    return res.send(e);
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

let displayGetCRUDAccount = async (req, res) => {
  let data = await CRUDAccountService.getAllAccount();
  return res.render("displayCRUDAccount.ejs", {
    dataTable: data,
  });
};

let getEditCRUDAccount = async (req, res) => {
  let accountID = req.query.id;
  if (accountID) {
    let accountData = await CRUDAccountService.getUserInfoByID(accountID);
    // check account not found
    // if (!accountData) {
    //   return res.send("Account with id=" + accountID + " not found");
    // }

    return res.render("editCRUDAccount.ejs", {
      account: accountData,
    });
  } else {
    return res.send("ID is not valid");
  }
};

let putCRUDAccount = async (req, res) => {
  let data = req.body;
  console.log(data);
  let resService = await CRUDAccountService.updateAccountData(data);
  console.log(resService);
  return res.render("displayCRUDAccount.ejs", {
    dataTable: resService.data,
  });
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUDAccount: getCRUDAccount,
  postCRUDAccount: postCRUDAccount,
  displayGetCRUDAccount: displayGetCRUDAccount,
  getEditCRUDAccount: getEditCRUDAccount,
  putCRUDAccount: putCRUDAccount,
};
