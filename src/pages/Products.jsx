import ProductList from "../components/ProductList"
import ProductForm from "../components/ProductForm"
import { useState, useEffect } from "react"

const Products = () => {
  const [products, setProducts] = useState([])
  const handleCreateProduct = (newItem) => {
    setProducts((prev) => [...prev, newItem])
  }

  //ComponentDidMount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products"))
    setProducts(data)
  }, [])

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  }, [products])

  return (
    <div className='products'>
      <ProductForm onSubmit={handleCreateProduct} />

      {/* Массив передается в ProductItem и там генерируем список */}
      <ProductList products={products} />
    </div>
  )
}

export default Products
