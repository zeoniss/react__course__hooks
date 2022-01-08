// import MyFirstComponent from "./components/MyFirstComponent"
// import MyThirdComponent from "./components/MyThirdComponent"
// import MySecondComponent from "./components/MySecondComponent"
import UserDetails from "./components/UserDetails.jsx"
import PropTypes from "prop-types"

const App = () => {
  const user = { firstName: "Jonh", lastName: "Dillinger", age: 37 }

  return (
    <div className='App'>
      <h1>Hello from React!</h1>
      <UserDetails user={user} />
      {/* <MyFirstComponent user={user} x={73} /> */}
      {/* <MySecondComponent secondUser={user} /> */}
      {/* <>
        <MyThirdComponent>
          <p>lorem ipsum dolor sit amet, consectet</p>
        </MyThirdComponent>
        <button type='button'>push me</button>
      </> */}
    </div>
  )
}
UserDetails.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
}

export default App
