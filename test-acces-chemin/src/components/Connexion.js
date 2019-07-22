import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Connexion extends Component {

  state = {
      pseudo: '',
      goToApp: false
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }
  
  goToApp = event => {
      event.preventDefault()
      this.setState({ goToApp: true })
  }

  render() {
    if(this.state.goToApp) {
        return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    return (
      <form className="connexion" onSubmit={this.goToApp}>
        <h3>Connectez-vous !</h3>
        <input 
            placeholder="Votre pseudo"
            value={this.state.pseudo}
            onChange={this.handleChange}
            required />
        <button type="submit">Entrer</button>
      </form>
    )
  }
}
