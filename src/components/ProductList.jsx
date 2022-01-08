import ProductItem from "./ProductItem"

const ProductList = ({ products }) => (
  <ul>
    {products.map((product) =>
      product.count > 0 ? (
        <ProductItem key={product.id} product={product} />
      ) : null
    )}
  </ul>
)

export default ProductList
