import './index.css'

const PasswordCard = props => {
  const {eachPassword} = props
  const {website, username, password, id} = eachPassword

  const initial = eachPassword.website[0].toUpperCase()

  return (
    <li className="password-card-container">
      <div className="initial-description-container">
        <p className="initial">{initial}</p>
        <div>
          <p className="description">{website}</p>
          <p className="description">{username}</p>
          <p className="description">{password}</p>
        </div>
      </div>
      <button type="button" className="delete-button" testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default PasswordCard
