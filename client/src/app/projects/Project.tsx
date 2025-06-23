import { useState } from "react";
import { useParams } from "react-router-dom";
import ProjectHeader from "./ProjectHeader";
import Board from "./BoardView";
import List from "./ListView";
import Timeline from "./TimelineView";
import Table from "./TableView";

const Project = () => {
  const { projectId } = useParams<{ projectId: string }>(); 

  const [activeTab, setActiveTab] = useState("Board");
  const [isModelNewTaskOpen, setIsModelNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (<Board projectId={projectId ?? ""} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />)}
      {activeTab === "List" && (<List setIsModalNewTaskOpen={setIsModelNewTaskOpen} projectId = {projectId ?? ""} />)}
      {activeTab === "Timeline" && (<Timeline setIsModalNewTaskOpen={setIsModelNewTaskOpen} projectId = {projectId ?? ""} />)}
      {activeTab === "Table" && (<Table setIsModalNewTaskOpen={setIsModelNewTaskOpen} projectId = {projectId ?? ""} />)}
    </div>
  );
};

export default Project;
