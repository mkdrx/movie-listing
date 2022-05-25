import React from "react";

const NavBar = () => {
  const user = { name: "Markus" };

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand">
          <h2>{user ? `Hi, ${user.name}!` : `Welcome!`} </h2>
        </span>
        {user ? (
          <button className="btn btn-primary">Logoff</button>
        ) : (
          <button className="btn btn-primary">Login</button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
