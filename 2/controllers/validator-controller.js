const { readFile } = require("node:fs/promises");
const { join } = require("node:path");

exports.isLoggedIn = () => {
  return async (req, _res, next) => {
    console.log(req.params);
    req.validationStatus = { isLoggedIn: true, message: null };
    try {
      console.log("hi");
      await readFile(
        join(__dirname, "../dbs/users-data.json"),"utf-8",(err, data) => {
          if (!!err) return console.log(err);
          console.log(data);
          const findedUser = data.find((user) => {
            console.log(user[username]);
            return user[username] == req.params.username;
          });
          console.log(findedUser);
          if (!findedUser) {
            req.validationStatus.isLoggedIn = false;
            req.validationStatus.message = "you don't have profile!";
            return next();
          }
          if (!findedUser.isLoggedIn) {
            req.isLoggedIn = false;
            req.message = "you should log in first!";
            return next();
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
    next();
  };
};
