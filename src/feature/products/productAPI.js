import axios from "../../utilities/axios.config";

export const fetchProducts = async () => {
  const data = await axios.get("/products");
  return data.data.data;
};


export const postProducts = async (productData) => {
  await axios.post("/product",productData)
}

export const deleteProducts = async (id) => {
  await axios.delete(`/product/${id}`,id)
}
