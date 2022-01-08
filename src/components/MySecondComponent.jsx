import React from "react"
class MySecondComponent extends React.Component {
  render() {
    return (
      <div className='second-component'>
        <h4>second component</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
          voluptatibus labore aperiam doloremque atque, illo nobis
          exercitationem! Laboriosam, similique dolorem.
        </p>
        <p>user name: {this.props.user.name}</p>
      </div>
    )
  }
}
export default MySecondComponent
