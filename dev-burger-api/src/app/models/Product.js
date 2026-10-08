import Sequelize, { Model } from "sequelize";
import { publicFileUrl, useSupabaseStorage } from "../../config/storage.js";

class Product extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				price: Sequelize.INTEGER,
				path: Sequelize.STRING,
				offer: Sequelize.BOOLEAN,
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						if (useSupabaseStorage) return publicFileUrl(this.path);
						return `${process.env.API_URL || "http://localhost:3001"}/product-file/${this.path}`;
					},
				},
			},
			{ sequelize, tableName: "products" },
		);
		return this;
	}
	static associate(models) {
		this.belongsTo(models.Category, {
			foreignKey: {
				name: "idCategory",
				field: "idCategory",
			},
			as: "category",
		});
	}
}

export default Product;
