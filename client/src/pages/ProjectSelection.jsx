import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProjectSelection() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
      try {
        const response = await axios.get("http://localhost:3001/projects", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Projects:", response.data);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectSelect = (project) => {
    localStorage.setItem("selectedProject", project.name);
    localStorage.setItem("currentStep", "tech-stack");
    navigate("/tech-stack");
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
        <h1 className="text-2xl mb-6 text-center">Select your project</h1>
        <div className="flex flex-col">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleProjectSelect(project)}
              className="mb-4 bg-transparent hover:bg-blue-100 text-blue-500 font-semibold hover:text-blue py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSelection;
