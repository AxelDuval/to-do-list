import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "../Components/BtnToggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";



export default function BtnToggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <>
      <button
        onClick={toggleTheme}
        className={theme ? "btn-toggle" : "btn-toggle dark-btn"}
      >
        {theme ? <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" color="#222" /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
    </>
  );
}
