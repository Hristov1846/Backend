import Product from "../models/Product.js";

// @desc Create a new product
// @route POST /api/marketplace
export const createProduct = async (req, res) => {
  try {
    const { title, description, price, image, category } = req.body;

    const product = await Product.create({
      user: req.user._id,
      title,
      description,
      price,
      image,
      category,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get all products
// @route GET /api/marketplace
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ isSold: false }).populate("user", "firstName lastName avatar");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get product by ID
// @route GET /api/marketplace/:id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("user", "firstName lastName avatar");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Buy a product
// @route POST /api/marketplace/buy/:id
export const buyProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    if (product.isSold) return res.status(400).json({ message: "Product already sold" });

    // Без % такса (както ти каза по-рано)
    product.isSold = true;
    await product.save();

    res.json({ message: "Product bought successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
