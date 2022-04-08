import {Component} from 'react'

import {v4} from 'uuid'

import PasswordCard from '../PasswordCard'

import './index.css'

class Password extends Component {
  state = {
    passwordsList: [],
    websiteName: '',
    userName: '',
    initialPassword: '',
    isChecked: false,
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {
      websiteName,
      userName,
      initialPassword,
      isChecked,
      passwordsList,
    } = this.state

    const newPassword = {
      id: v4(),
      website: websiteName,
      username: userName,
      password: initialPassword,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteName: '',
      userName: '',
      initialPassword: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({initialPassword: event.target.value})
  }

  onClickOnShow = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  getWebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  onDelete = id => {
    const {passwordsList} = this.state
    const updatedList = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({passwordsList: updatedList})
  }

  renderPasswordsList = () => {
    const {passwordsList, websiteName, isChecked} = this.state
    const searchResults = passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(websiteName.toLowerCase()),
    )

    if (passwordsList.length !== 0) {
      return (
        <ul className="list-container">
          {isChecked
            ? searchResults.map(eachPassword => (
                <PasswordCard
                  key={eachPassword.id}
                  count={passwordsList.length}
                  eachPassword={eachPassword}
                  isChecked={isChecked}
                  onDelete={this.onDelete}
                />
              ))
            : searchResults.map(eachPassword => (
                <PasswordCard
                  key={eachPassword.id}
                  count={passwordsList.length}
                  eachPassword={eachPassword}
                  isChecked={isChecked}
                  onDelete={this.onDelete}
                />
              ))}
        </ul>
      )
    }
    return (
      <div className="no-passwords-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          className="no-passwords-image"
          alt="no passwords"
        />
        <p className="no-passwords">No Passwords</p>
      </div>
    )
  }

  render() {
    const {passwordsList, isChecked} = this.state
    console.log(isChecked)

    return (
      <div className="app-container">
        <div className="top-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
        </div>
        <div className="middle-section">
          <div className="inputs-container">
            <h1 className="heading">Add New Password</h1>
            <form onSubmit={this.onSubmitForm}>
              <div className="website-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="icon"
                    alt="website"
                  />
                </div>
                <hr className="horizontal-line" />
                <input
                  type="text"
                  onChange={this.onChangeWebsite}
                  className="input-styling"
                  placeholder="Enter Website"
                />
              </div>
              <div className="website-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    className="icon"
                    alt="username"
                  />
                </div>
                <hr className="horizontal-line" />
                <input
                  type="text"
                  onChange={this.onChangeUsername}
                  className="input-styling"
                  placeholder="Enter Username"
                />
              </div>
              <div className="website-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="icon"
                    alt="password"
                  />
                </div>
                <hr className="horizontal-line" />
                <input
                  type="password"
                  onChange={this.onChangePassword}
                  className="input-styling"
                  placeholder="Enter Password"
                />
              </div>
              <div className="button-container">
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="password-image"
            alt="password manager"
          />
        </div>
        <div className="bottom-section">
          <div className="bottom-section-top">
            <div className="your-passwords-section">
              <h1 className="your-passwords">Your Passwords</h1>
              <p className="passwords-count">{passwordsList.length}</p>
            </div>
            <div className="search-container">
              <div className="search-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="search-icon"
                  alt="search"
                />
              </div>
              <hr className="horizontal-line" />
              <input
                type="search"
                className="search-section"
                placeholder="Search"
                onChange={this.getWebsiteName}
              />
            </div>
          </div>
          <hr className="horizontal-line1" />

          <div className="show-passwords-container">
            <input
              type="checkbox"
              id="checkbox"
              onClick={this.onClickOnShow}
              className="checkbox"
            />
            <label htmlFor="checkbox" className="show-passwords">
              Show Passwords
            </label>
          </div>
          {this.renderPasswordsList()}
        </div>
      </div>
    )
  }
}
export default Password
