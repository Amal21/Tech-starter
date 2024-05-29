import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import ProjectSelection from "./pages/ProjectSelection";
import TechStackSelection from "./pages/TechStackSelection";
import FrontendSnippets from "./pages/FrontendSnippets";
import BackendSnippets from "./pages/BackendSnippets";
import Finalization from "./pages/Finalization";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentStep = localStorage.getItem("currentStep");
    if (currentStep) {
      navigate(`/${currentStep}`);
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/projects" element={<ProjectSelection />} />
      <Route path="/tech-stack" element={<TechStackSelection />} />
      <Route path="/frontend-snippets" element={<FrontendSnippets />} />
      <Route path="/backend-snippets" element={<BackendSnippets />} />
      <Route path="/finalization" element={<Finalization />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
