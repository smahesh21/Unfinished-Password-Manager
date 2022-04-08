import './index.css'

const PasswordCard = props => {
  const {eachPassword, onDelete, isChecked} = props
  const {website, username, password, id} = eachPassword

  const initial = eachPassword.website[0].toUpperCase()

  const onClickDeleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="password-card-container">
      <div className="initial-description-container">
        <div className="initial-container">
          <p className="initial">{initial}</p>
        </div>
        <div>
          <p className="description">{website}</p>
          <p className="description">{username}</p>
          {isChecked && <p className="description">{password}</p>}
          {!isChecked && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="password"
              alt="stars"
            />
          )}
        </div>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDeleteButton}
        testid="delete"
      >
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
