import React from "react";
import Logo from "./Logo/Logo";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <Logo />
      <NavigationButtons />
    </nav>
  );
}

export default Navigation;
