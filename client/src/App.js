import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import ProjectSelection from "./pages/ProjectSelection";
import TechStackSelection from "./pages/TechStackSelection";
import FrontendSnippets from "./pages/FrontendSnippets";
import BackendSnippets from "./pages/BackendSnippets";
import Finalization from "./pages/Finalization";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem("username"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const currentStep = localStorage.getItem("currentStep");
    if (currentStep) {
      navigate(`/${currentStep}`);
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header username={username} />
      <main className="flex-grow flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Login setUsername={setUsername} />} />
          <Route path="/projects" element={<ProjectSelection />} />
          <Route path="/tech-stack" element={<TechStackSelection />} />
          <Route path="/frontend-snippets" element={<FrontendSnippets />} />
          <Route path="/backend-snippets" element={<BackendSnippets />} />
          <Route path="/finalization" element={<Finalization />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
