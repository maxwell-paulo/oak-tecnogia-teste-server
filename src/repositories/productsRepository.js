import pool from "../database/database.js";

const createProduct = async (productData) => {
  const { name, description, value, available } = productData;

  const query = `INSERT INTO products
  (name, description, value, available) VALUES ($1,$2,$3,$4)
  returning *`;

  const params = [name, description, value, available];

  const newProduct = await pool.query(query, params);

  return newProduct.rows[0];
};

const listProducts = async () => {
  const products = await pool.query(`SELECT name, value, id FROM products`);

  return products.rows;
};

const listProductsByValue = async (ascendingOrder) => {
  const sortOrder = ascendingOrder ? "ASC" : "DESC";

  const products = await pool.query(
    `SELECT name, value FROM products ORDER BY value ${sortOrder}`
  );

  return products.rows;
};

export { createProduct, listProducts, listProductsByValue };
