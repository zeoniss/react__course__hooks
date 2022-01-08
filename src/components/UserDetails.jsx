const UserDetails = ({ user }) => {
  const { firstName, lastName, age } = user

  return (
    <div className='user-details'>
      <h4>User details</h4>
      <p>firstName: {firstName}</p>
      <p>lastName: {lastName}</p>
      <p>age: {age}</p>
    </div>
  )
}

export default UserDetails
