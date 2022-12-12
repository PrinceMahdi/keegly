// <-------------------- IMPORTS -------------------->
const express = require("express");
const cors = require("cors");
const path = require("node:path");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

// <------------------- INITIALIZE THE EXPRESS SERVER ------------------->
const app = express();

// <-------------------- FOR .env FILES -------------------->
require("dotenv").config();

// <-------------------- MIDDLEWARE -------------------->
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(
  cookieSession({
    name: "session",
    keys: ["test"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.use("/users", usersRoute);

// <-------------------- SERVER LISTENING FOR CHANGES -------------------->
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`⭐️ ::: Server is running on port (${PORT}) ::: ⭐️`);
});
