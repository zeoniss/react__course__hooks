import PropTypes from "prop-types"
import phone from "../assets/phone.jpg"
import notebook from "../assets/notebook.jpg"
import { createUseStyles } from "react-jss"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import IconButton from "@material-ui/core/IconButton"
const images = { phone, notebook }

const useStyles = createUseStyles({
  item: {
    "& img": {
      height: 100,
    },
    "&:hover": {
      backgroundColor: "white",
    },
  },
  card: { marginBottom: 10, padding: 10 },
  green: { backgroundColor: "green" },
})

const ProductItem = ({ product }) => {
  const classes = useStyles()
  return (
    <li className={classes.item}>
      <CardActionArea>
        <Card className={classes.card}>
          <p>name: {product.name}</p>
          <p>price: {product.price}</p>
          <p>count: {product.count}</p>
          <p>color: {product.color || "--"}</p>
          <p>Advanced insurance : {product?.insurance?.toString() || "--"}</p>
          <p>Install software : {product?.software?.toString() || "--"}</p>
          <img src={images[product.img]} alt={product.name} />
        </Card>
      </CardActionArea>
      <IconButton>
        <AddShoppingCartIcon />
      </IconButton>
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
