const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const testRoutes = require("./routes/testRoutes");

app.use("/api", testRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "FRP Planters Backend is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});