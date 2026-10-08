import express from "express";
import routes from "./routes.js";
import fileRouteConfig from "./config/fileRoutes.cjs";
import cors from "cors";
import "./database/index.js";

const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : true,
	}),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/product-file", fileRouteConfig);
app.use("/category-file", fileRouteConfig);
app.use(routes);

export default app;
