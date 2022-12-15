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
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));


// app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const storeItems = new Map([
  [1, { priceInCents: 2499, name: "Card" }],
  [2, { priceInCents: 3499, name: "Bracelet" }],
]);

app.post("/create-checkout-session", async (req, res) => {
  const { items } = req.body;

  const line_items = [];

  items.forEach((item) => {
    const product = storeItems.get(item.id);
    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
        },
        unit_amount: product.priceInCents,
      },
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: process.env.SUCCESS_URL,
    cancel_url: process.env.CANCEL_URL,
  });

  res.json({ id: session.id });
});

app.use(
  cookieSession({
    name: "session",
    keys: ["keegly"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: ["http://localhost:8080", "http://localhost:3000"],
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
