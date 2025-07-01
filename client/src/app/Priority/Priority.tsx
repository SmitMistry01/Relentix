import { useState } from "react";
import type { Priority, Task } from "../../state/api";
import { useGetTasksByUserQuery } from "../../state/api";
import { useAppSelector } from "../redux";
import ModalNewTask from "../../components/ModalNewTask";
import Header from "../../components/Header";

type Props = {
  priority: Priority;
};

const PriorityPage = ({ priority }: Props) => {
  const [view, setView] = useState("List");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  const userId = 1;
  const {
    data: tasks,
    isLoading,
    isError: isTaskError,
  } = useGetTasksByUserQuery(userId || 0, {
    skip: userId === null,
  });
  
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const filteredTasks = tasks?.filter((task:Task) => task.priority === priority);

  if(isTaskError || !tasks) return <div>Error fetching tasks</div>
  return <div className="m-5 p-4">
    <ModalNewTask isOpen = {isModalNewTaskOpen} onClose = {() => {
      setIsModalNewTaskOpen(false)
    }} />
    <Header name = "Priority Page" buttonComponent={<button className=" rounded flex items:center bg-blue-primary px-3 py-2 text-white hover:bg-blue-600" onClick={() => setIsModalNewTaskOpen(true)}>Add Task</button>} />

  </div>;
  <div className="mb-4 flex justify-start">
    <button className={`px-4 py-2 ${view === "List" ? "bg-gray-300":"bg-white"}`}/>
  </div>
};

export default PriorityPage;
