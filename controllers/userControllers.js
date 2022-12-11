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


export {
    hello,
    readSecrets
}