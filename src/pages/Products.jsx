import ProductList from "../components/ProductList"
import ProductForm from "../components/ProductForm"
import { useState, useEffect } from "react"
import { getProducts, addProduct, deleteProduct } from "../utils/productsApi"

const Products = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const handleAddProduct = (newItem) => {
    setIsLoading(true)
    // setProducts((prev) => [...prev, newItem])
    addProduct(newItem)
      .then((data) => setProducts((prev) => [...prev, data]))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }

  const handleDeleteProduct = (id) => {
    deleteProduct(id)
  }

  //ComponentDidMount
  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem("products"))
    setIsLoading(true)
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }, [])

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(products))
  // }, [products])

  return (
    <div className='products'>
      <ProductForm onSubmit={handleAddProduct} />

      {error && <button onClick={() => setError(undefined)}>x</button>}

      {isLoading && <p>Loading...</p>}
      {/* Массив передается в ProductItem и там генерируем список */}
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  )
}

export default Products
