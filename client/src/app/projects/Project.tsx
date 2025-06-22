import { useState } from "react";
import { useParams } from "react-router-dom";
import ProjectHeader from "./ProjectHeader";
import Board from "./BoardView";

const Project = () => {
  const { projectId } = useParams<{ projectId: string }>(); 

  const [activeTab, setActiveTab] = useState("Board");
  const [isModelNewTaskOpen, setIsModelNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (<Board projectId={projectId ?? ""} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />)}
    </div>
  );
};

export default Project;
