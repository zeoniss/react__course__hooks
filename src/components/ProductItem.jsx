import PropTypes from "prop-types"
import phone from "../assets/phone.jpg"
import notebook from "../assets/notebook.jpg"
import { createUseStyles } from "react-jss"
import { deleteProduct } from "../utils/productsApi"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined"
import IconButton from "@material-ui/core/IconButton"
const images = { phone, notebook }

const useStyles = createUseStyles({
  item: {
    display: "flex",
    marginBottom: 10,
    alignItems: "flex-start",
  },
  card: {
    padding: 10,
  },
  image: {
    height: 100,
  },
  green: {
    "&.MuiPaper-root": {
      backgroundColor: "green",
    },
  },
})

const ProductItem = ({ product, onDelete }) => {
  const classes = useStyles()

  const handleDelete = () => onDelete(product.id)

  return (
    <li className={classes.item}>
      <CardActionArea>
        <Card
          className={[
            classes.card,
            product.insurance ? classes.green : "",
          ].join(" ")}
        >
          <p>name: {product.name}</p>
          <p>price: {product.price}</p>
          <p>count: {product.count}</p>
          <p>color: {product.color || "--"}</p>
          <p>Advanced insurance : {product?.insurance?.toString() || "--"}</p>
          <p>Install software : {product?.software?.toString() || "--"}</p>
          <img
            src={images[product.img]}
            alt={product.name}
            width='200'
            length='200'
          />
        </Card>
      </CardActionArea>
      <div className='icon'>
        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>

        <IconButton>
          <DeleteForeverOutlinedIcon />
        </IconButton>
      </div>
    </li>
  )
}
ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    color: PropTypes.string,
    insurance: PropTypes.bool,
    software: PropTypes.bool,
    img: PropTypes.string,
  }),
}

export default ProductItem
