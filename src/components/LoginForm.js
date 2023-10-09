import React, { Component } from "react";
import "../styles/LoginForm.css";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isRegistration: false,
      errors: {
        email: "",
        password: "",
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    let errors = { ...this.state.errors };

    switch (name) {
      case "email":
        errors.email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
          value
        )
          ? ""
          : "Adresse e-mail invalide";
        break;
      case "password":
        errors.password =
          value.length >= 6
            ? ""
            : "Le mot de passe doit contenir au moins 6 caractères";
        break;
      default:
        break;
    }

    this.setState({
      [name]: value,
      errors,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, isRegistration, errors } = this.state;

    // Vérifiez si des erreurs existent avant de soumettre le formulaire
    if (isRegistration) {
      if (email && password && !errors.email && !errors.password) {
        // Envoyez les données d'inscription au serveur ou effectuez une action appropriée
        console.log("Inscription réussie!");
      } else {
        console.error("Erreur dans le formulaire d'inscription.");
      }
    } else {
      if (email && password && !errors.email && !errors.password) {
        // Envoyez les données de connexion au serveur ou effectuez une action appropriée
        console.log("Connexion réussie!");
      } else {
        console.error("Erreur dans le formulaire de connexion.");
      }
    }
  };

  toggleRegistration = () => {
    this.setState((prevState) => ({
      isRegistration: !prevState.isRegistration,
    }));
  };

  render() {
    const { email, password, isRegistration, errors } = this.state;

    return (
      <div>
        <h2>{isRegistration ? "Inscription" : "Connexion"}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <span className="error">{errors.email}</span>
          </div>
          <div>
            <label>Mot de passe:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <span className="error">{errors.password}</span>
          </div>
          <button type="submit">
            {isRegistration ? "S'inscrire" : "Se connecter"}
          </button>
        </form>
        <p>
          {isRegistration ? "Déjà un compte ?" : "Pas encore de compte ?"}
          <button onClick={this.toggleRegistration}>
            {isRegistration ? "Se connecter" : "S'inscrire"}
          </button>
        </p>
      </div>
    );
  }
}

export default LoginForm;
