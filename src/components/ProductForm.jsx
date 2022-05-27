import { createUseStyles } from "react-jss"
import { useState } from "react"

const useStyles = createUseStyles({
  productForm: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    display: "flex",
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  error: {
    backgroundColor: "red",
  },
  color: {
    display: "flex",
    justifyContent: "space-between",
  },
})
//Для очистки полей используем объект initialState
const initialState = {
  name: "",
  price: "",
  count: "",
  color: "white",
  image: "phone",
}

const ProductForm = ({ onSubmit }) => {
  const classes = useStyles()
  // const [name, setName] = useState("")
  // const [price, setPrice] = useState("")
  // const [count, setCount] = useState("")
  // const [image, setImage] = useState("")

  const [state, setState] = useState(initialState)
  const [error, setError] = useState("")
  const { name, price, count, color, image, insurance, software } = state

  const handleSubmit = (e) => {
    e.preventDefault()
    //сделать проверку чтобы все поля были заполнены
    //Взяли все values из объекта state
    const hasEmptyField = Object.values(state).some((item) => !item)
    if (hasEmptyField) {
      setError("Поле не заполнено")
      return
    }

    const newItem = {
      id: Date.now(),
      name,
      price: Number(price),
      count: Number(count),
      color,
      insurance,
      software,
      img: image,
    }
    onSubmit(newItem)
    //для очистки данных
    setState(initialState)
    setError("")
    //   setName("")
    //   setPrice("")
    //   setCount("")
  }

  const handleChange = (e) =>
    //берем предыдущий вариант,распыляем в новый объект
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

  const handleCheckboxChange = (e) =>
    //берем предыдущий вариант,распыляем в новый объект
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }))

  return (
    <form className={classes.productForm} onSubmit={handleSubmit}>
      <label className={classes.label}>
        <span>Name:</span>
        <input
          type='text'
          className={classes.input}
          value={name}
          name='name'
          onChange={handleChange}
        />
      </label>
      <label className={classes.label}>
        <span>Price:</span>
        <input
          type='number'
          className={classes.input}
          value={price}
          name='price'
          onChange={handleChange}
        />
      </label>
      <label className={classes.label}>
        <span>Count:</span>
        <input
          type='number'
          className={classes.input}
          value={count}
          name='count'
          onChange={handleChange}
        />
      </label>
      <label className={classes.label}>
        <span>Image:</span>
        <select
          className={classes.input}
          value={image}
          name='image'
          onChange={handleChange}
        >
          <option value='phone'>phone</option>
          <option value='notebook'>notebook</option>
        </select>
      </label>
      <fieldset className={classes.color}>
        <legend>color</legend>
        <label>
          <span>white</span>
          <input
            type='radio'
            name='color'
            onChange={handleChange}
            value='white'
            checked={color === "white"}
          />
        </label>
        <label>
          <span>gray</span>
          <input
            type='radio'
            name='color'
            onChange={handleChange}
            value='gray'
            checked={color === "gray"}
          />
        </label>
        <label>
          <span>black</span>
          <input
            type='radio'
            name='color'
            onChange={handleChange}
            value='black'
            checked={color === "black"}
          />
        </label>
      </fieldset>

      <fieldset className={classes.fieldset}>
        <legend>Service</legend>

        <label>
          <span>Advanced Insurance (12M)</span>

          <input
            type='checkbox'
            onChange={handleCheckboxChange}
            checked={insurance}
            name='insurance'
          />
        </label>
        <label>
          <span>Install software</span>

          <input
            type='checkbox'
            onChange={handleCheckboxChange}
            checked={software}
            name='software'
          />
        </label>
      </fieldset>

      {error && <p className={classes.error}>{error}</p>}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default ProductForm
