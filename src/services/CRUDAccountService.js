import bcrypt from "bcryptjs";
import db from "../models";

const salt = bcrypt.genSaltSync(10);

let createAccount = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashAccountPassword(data.password);
      await db.Account.create({
        username: data.username,
        password: hashPasswordFromBcrypt,
        roleKey: data.roleKey,
        workplaceID: data.workplaceID,
        image: data.image,
      });

      resolve({
        errCode: 0,
        message: "OK",
      });
    } catch (e) {
      reject(e);
    }
  });
};

let hashAccountPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync("B4c0//", salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllAccount = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let accounts = db.Account.findAll({
        raw: true,
      });
      resolve(accounts);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createAccount: createAccount,
  getAllAccount: getAllAccount,
};
