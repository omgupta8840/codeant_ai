import { Route, Routes } from "react-router";
import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import SidebarLayout from "./components/Sidebar";
import { useState } from "react";
import NotFound from "./pages/NotFound";

function App() {
  const [username, setUsername] = useState("utkarshdhairyapanwar");

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <Routes>
      <Route exact path="/login" element={<Auth />} />
      <Route
        path="/"
        element={
          <SidebarLayout onUsernameChange={handleUsernameChange}>
            <Home username={username} />
          </SidebarLayout>
        }
      />
      <Route path="*"
        element={
          <SidebarLayout onUsernameChange={handleUsernameChange}>
            <NotFound />
          </SidebarLayout>
        }
      />
    </Routes>
  );
}

export default App;
