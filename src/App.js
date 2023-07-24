import "./App.css";
import { createContext, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
export let NameContext = createContext("");
function App() {
  const [name, setName] = useState("");
  return (
    <NameContext.Provider className="App" value={{ name, setName }}>
      <Outlet />
      <ScrollRestoration />
    </NameContext.Provider>
  );
}

export default App;
