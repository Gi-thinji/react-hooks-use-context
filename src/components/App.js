import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeProvider } from "../context/theme";

function App() {
  const [theme, setTheme] = useState("dark");
  // const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      {/* wrap components that need access to context data in the provider*/}
      <UserProvider>
        <ThemeProvider>
          <Header theme={theme} setTheme={setTheme} />
          <Profile theme={theme} />
        </ThemeProvider>
      </UserProvider>
    </main>
  );
}

export default App;
