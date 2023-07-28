import React,{useContext} from "react";
import { ThemeContext} from "../context/theme";

function DarkModeToggle({ setTheme }) {
  function handleToggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }
  const theme=useContext(ThemeContext)
  console.log(theme)
  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;
