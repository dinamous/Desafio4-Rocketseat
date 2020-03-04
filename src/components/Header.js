import React from "react";

import Facebook_Logo from "../assets/facebook_logo.png";

function Header() {
  return (
    <header>
      <img src={Facebook_Logo} />
      <div className="perfil">
        <p>Meu Perfil</p>
        <i className="fas fa-user-circle"></i>
      </div>
    </header>
  );
}

export default Header;
