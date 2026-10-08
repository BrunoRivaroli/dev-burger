import { Sequelize } from "sequelize";
import mongoose from "mongoose";
import databaseConfig from "../config/database.cjs";
import User from "../app/models/User.js";
import Product from "../app/models/Product.js";
import Category from "../app/models/Category.js";

const models = [User, Product, Category];

class Database {
	constructor() {
		this.init();
		this.mongo();
	}

	init() {
		// Com DATABASE_URL, a URL precisa ir como 1º argumento: passando só o
		// objeto de config, o Sequelize ignora a chave "url" e usa localhost.
		this.connection = databaseConfig.url
			? new Sequelize(databaseConfig.url, databaseConfig)
			: new Sequelize(databaseConfig);
		models
			.map((model) => model.init(this.connection))
			.map(
				(model) => model.associate && model.associate(this.connection.models),
			);
	}

	mongo() {
		this.mongoConnection = mongoose.connect(
			process.env.MONGO_URL || "mongodb://localhost:27017/devburguer",
		);
	}
}

export default new Database();
