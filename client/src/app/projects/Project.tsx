import { useState } from "react";
import { useParams } from "react-router-dom";
import ProjectHeader from "./ProjectHeader";

const Project = () => {
  const { projectId } = useParams<{ projectId: string }>(); 

  const [activeTab, setActiveTab] = useState("Board");
  const [isModelNewTaskOpen, setIsModelNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Project;
