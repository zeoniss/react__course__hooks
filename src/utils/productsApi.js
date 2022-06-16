import axios from "axios"

const URL = "http://localhost:4040/products"

export const getProducts = () => axios.get(URL).then(({ data }) => data)

export const addProduct = (payload) =>
  axios.post(URL, payload).then(({ data }) => data)

export const deleteProduct = (id) =>
  axios.delete(`http://localhost:4040/products/${id}`)
