import { Fragment } from "react"
import MySecondComponent from "./MySecondComponent"

const MyFirstComponent = ({ user, x }) => {
  return (
    <Fragment>
      <div className='test-component'>
        <h2>Test Component</h2>
        <p>lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <div>
        <p>Hello world!</p>
        <p>x:{x}</p>
      </div>
      <p>User name:{user.name}</p>
      <MySecondComponent user={user} />
    </Fragment>
  )
}
MyFirstComponent.defaultProps = {
  x: 100,
}

export default MyFirstComponent
