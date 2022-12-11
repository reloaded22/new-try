import User from "../models/User.js";
import passport from "passport";
import url from "url";


const hello = (req, res) => {
    console.log('Hello bitches');
    User.find((e, items) => {
        if (e) console.log(e.message)
        else res.json(items)
    })
};

const readSecrets = (req, res) => {
  //console.log(`Authenticated?: ${req.isAuthenticated() ? "YES" : "NO"}`);
  User.find((err, users) => {
    if (err) {
      console.log(err);
    } else {
      if (users) {
        res.json({
          users,
          user: req.isAuthenticated() ? req.user : {},
          loggedIn: req.isAuthenticated(),
        });
      }
    }
  });
};

const registerUser = (req, res) => {
  console.log(req.body);

  const user = {
    username: req.body.username,
    alias: req.body.alias,
  };
  const password = req.body.password;

  User.register(user, password, (err) => {
    let regError = "";
    if (!err) {
      console.log("New user saved successfully\n");
      res.json({ regError: null });
    } else {
      console.log(err.message);
      err.message.search("key") != -1
        ? (regError = "Alias already taken, please choose a different one")
        : (regError = "Email already registered");
      res.json({ regError });
    }
  });
};

const authenticateUser = (req, res) => {
  passport.authenticate("local", (err, user, options) => {
    if (user) {
      req.login(user, (error) => {
        if (error) {
          res.send(error);
        } else {
          console.log("Successfully authenticated\n");
          res.json({
            user: user,
            loggedIn: req.isAuthenticated(),
            loginError: "",
          });
        }
      });
    } else {
      res.json({
        user: {},
        loggedIn: req.isAuthenticated(),
        loginError: options.message,
      });
    }
  })(req, res);
};

const logOut = (req, res) => {
  req.logOut((err) => {
    if (!err) {
      console.log("Successfully logged out\n");
      res.json({
        loggedIn: req.isAuthenticated(),
        loginError: "",
      });
    } else {
      console.log(err);
      res.json({
        loggedIn: req.isAuthenticated(),
        loginError: err,
      });
    }
  });
};


export {
    hello,
    readSecrets,
    registerUser,
    authenticateUser,
    logOut,
}