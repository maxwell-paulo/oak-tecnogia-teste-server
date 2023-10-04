import pool from "../database/database.js";

const createProduct = async (productData) => {
  const { name, description, value, available } = productData;

  const query = `INSERT INTO PRODUCTS
  (name, description, value, available) VALUES ($1,$2,$3,$4)
  returning *`;

  const params = [name, description, value, available];

  const newProduct = await pool.query(query, params);

  return newProduct.rows[0];
};

export { createProduct };
