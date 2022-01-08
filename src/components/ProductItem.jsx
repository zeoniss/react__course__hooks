import phone from "../assets/phone.jpg"
import notebook from "../assets/notebook.jpg"

const images = { phone, notebook }

const ProductItem = ({ product }) => {
  return (
    <li className='item'>
      <p>name: {product.name}</p>
      <p>price: {product.price}</p>
      <p>count: {product.count}</p>
      <img src={images[product.img]} alt={product.name} />
    </li>
  )
}

export default ProductItem
