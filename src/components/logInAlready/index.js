const loginAlready = props => {
  const {userPostDetails} = props
  const {profilePicture, userName} = userPostDetails
  return (
    <div>
      <h1>{userName}</h1>
      <img src={profilePicture} alt="igm" />
    </div>
  )
}
export default loginAlready
