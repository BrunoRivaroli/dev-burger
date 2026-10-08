import Sequelize, { Model } from "sequelize";
import { publicFileUrl, useSupabaseStorage } from "../../config/storage.js";

class Category extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				path: Sequelize.STRING,
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						if (useSupabaseStorage) return publicFileUrl(this.path);
						return `${process.env.API_URL || "http://localhost:3001"}/category-file/${this.path}`;
					},
				},
			},
			{ sequelize, tableName: "categories" },
		);
		return this;
	}
}

export default Category;
