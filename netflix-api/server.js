const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
	.connect(
		"mongodb+srv://dgreen91:eras88mm@netflix-clone.ad5gm1m.mongodb.net/?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log("DB Connected");
	});

app.use("/api/user", userRoutes);

app.listen(process.env.PORT || 5000, () => {
	console.log("server started");
});
