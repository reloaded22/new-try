import express from "express";
import { hello, readSecrets, registerUser, authenticateUser, logOut } from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.get("/", hello);

userRouter.get("/home", readSecrets);

userRouter.post("/register", registerUser); 

userRouter.get("/test-login", (req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html" }); !Only with res.end()
  res.send(
    `<div>
    <p>Test Login<p>
    <form action="/login" method="post">
      <input type="text" name="username">
      <input type="password" name="password">
      <input type="submit">
    </form>
    </div>`
  );
});

userRouter.post("/login", authenticateUser);

userRouter.get("/logout", logOut); 

export default userRouter;