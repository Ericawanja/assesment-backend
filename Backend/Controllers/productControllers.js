const mssql = require("mssql");
const sqlConfig = require("../Config");
const { exec } = require("../DatabaseHelpers/db_connect");

const getAllProducts = async (req, res) => {
  const pool = await mssql.connect(sqlConfig);
  const products = await (
    await pool.request().execute("getAllProducts")
  ).recordset;
  if (products.length > 0) {
    return res.status(200).json({ products });
  } else {
    return res
      .status(200)
      .json({ message: "The are no products in the store" });
  }
  //const products = await exec(getAllProducts)
};

const getOneProduct = async (req, res) => {
  const { product_id } = req.params;
  const pool = await mssql.connect(sqlConfig);
  const product = await (
    await pool
      .request()
      .input("product_id", product_id)
      .execute("getOneProduct")
  ).recordset;
  if (product.length > 0) {
    return res.status(200).json({ product });
  } else {
    return res.status(200).json({ message: `This product does not exist` });
  }
};

const deleteProduct = async (req, res) => {
  const { product_id } = req.params;
  const pool = await mssql.connect(sqlConfig);
  const product = await (
    await pool
      .request()
      .input("product_id", product_id)
      .execute("getOneProduct")
  ).recordset;
  if (product.length > 0) {
    await pool
      .request()
      .input("product_id", product_id)
      .execute("deleteProduct");

    return res
      .status(200)
      .json({ message: "you have successfully deleted the product" });
  } else {
    return res
      .status(200)
      .json({ message: `You cannot delete an item that does not exist` });
  }
};
const updateOrAddProduct = async (req, res) => {
  const product_id = req.params;
  const pool = await mssql.connect(sqlConfig);
};

module.exports = {
  getAllProducts,
  getOneProduct,
  updateOrAddProduct,
  deleteProduct,
};
