import handleServerError from "../utils/serverError.js";
import { createProduct } from "../repositories/productsRepository.js";

const createProductController = async (req, res) => {
  const { name, description, value, available } = req.body;

  if (!name || !description || !value || !available) {
    return res.status(500).json({ error: "Must fill in all fields" });
  }

  try {
    const newProduct = await createProduct(req.body);

    return res.status(201).json(newProduct);
  } catch (error) {
    return handleServerError(error);
  }
};

export { createProductController };
