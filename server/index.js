// <-------------------- IMPORTS -------------------->
const express = require("express");
const cors = require("cors");
const path = require("node:path");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const passport = require("passport");

// <------------------- INITIALIZE THE EXPRESS SERVER ------------------->
const app = express();

// <-------------------- FOR .env FILES -------------------->
require("dotenv").config();

// <-------------------- ROUTES IMPORTS -------------------->
// const videoRouter = require("./routes/videos");

// <-------------------- MIDDLEWARE -------------------->
app.use(express.json());

// <-------------------- SERVING ALL STATIC FILES -------------------->
// app.use(express.static(path.join(__dirname, "public")));

// <-------------------- SERVING STATIC RESOURCES TO CLIENT -------------------->
// app.get("/", (_req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// <-------------------- ROUTES -------------------->
// Videos Route
// app.use("/videos", videoRouter);

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

// <-------------------- SERVER LISTENING FOR CHANGES -------------------->
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`⭐️ ::: Server is running on port (${PORT}) ::: ⭐️`);
});
