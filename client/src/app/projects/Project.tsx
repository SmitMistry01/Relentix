import { useState } from "react";
import { useParams } from "react-router-dom";
import ProjectHeader from "./ProjectHeader";
import Board from "./BoardView";
import List from "./ListView";
import Timeline from "./TimelineView";
import Table from "./TableView";
import ModalNewTask from "../../components/ModalNewTask";

const Project = () => {
  const { projectId } = useParams<{ projectId: string }>(); 

  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ModalNewTask isOpen = {isModalNewTaskOpen} onClose = {() => setIsModalNewTaskOpen(false)}></ModalNewTask>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (<Board projectId={projectId ?? ""} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />)}
      {activeTab === "List" && (<List setIsModalNewTaskOpen={setIsModalNewTaskOpen} projectId = {projectId ?? ""} />)}
      {activeTab === "Timeline" && (<Timeline setIsModalNewTaskOpen={setIsModalNewTaskOpen} projectId = {projectId ?? ""} />)}
      {activeTab === "Table" && (<Table setIsModalNewTaskOpen={setIsModalNewTaskOpen} projectId = {projectId ?? ""} />)}
    </div>
  );
};

export default Project;
