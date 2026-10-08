import Sequelize, { Model } from "sequelize";

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
