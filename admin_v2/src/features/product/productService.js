import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};

const createProduct = async (product) => {
  console.log("product", product);
  const response = await axios.post(`${base_url}product/`, product, config);

  return response.data;
};
const getProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`, config);

  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(`${base_url}product/${id}`, config);

  return response.data;
};
const productService = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
};

export default productService;