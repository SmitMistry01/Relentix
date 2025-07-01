import { useState } from "react";
import type { Task } from "../../state/api";
import { useGetTasksByUserQuery } from "../../state/api";
import { useAppSelector } from "../redux";
import ModalNewTask from "../../components/ModalNewTask";
import Header from "../../components/Header";
import TaskCard from "../../components/TaskCard";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { dataGridClassNames, dataGridSxStyles } from "../../lib/utils";
import { useParams } from "react-router-dom";


const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => (
      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
        {params.value}
      </span>
    ),
  },
  {
    field: "priority",
    headerName: "Priority",
    width: 75,
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 130,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 130,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 130,
  },
  {
    field: "author",
    headerName: "Author",
    width: 150,
    renderCell: (params) => params.value?.author || "Unknown",
  },
  {
    field: "assignee",
    headerName: "Assignee",
    width: 150,
    renderCell: (params) => params.value?.assignee || "Unassigned",
  },
];
const PriorityPage = () => {
  const { priority } = useParams<{ priority: string }>();
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
  const filteredTasks = priority
    ? (tasks || []).filter(
        (task: Task) => task.priority?.toLowerCase() === priority.toLowerCase()
      )
    : [];
  console.log("priority prop:", priority);

  if (isTaskError || !tasks) return <div>Error fetching tasks</div>;
  return (
    <div className="m-5 p-4">
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => {
          setIsModalNewTaskOpen(false);
        }}
      />
      <Header
        name="Priority Page"
        buttonComponent={
          <button
            className=" rounded flex items:center bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
            onClick={() => setIsModalNewTaskOpen(true)}
          >
            Add Task
          </button>
        }
      />

      <div className="mb-4 flex justify-start">
        <button
          className={`px-4 py-2 ${view === "List" ? "bg-gray-300" : "bg-white"} rounded-l`}
          onClick={() => setView("Table")}
        >
          List
        </button>
        <button
          className={`px-4 py-2 ${view === "Table" ? "bg-gray-300" : "bg-white"} rounded-r`}
          onClick={() => setView("List")}
        >
          Table
        </button>
      </div>
      {isLoading ? (
        <div>Loading Tasks</div>
      ) : view === "List" ? (
        <div className="grid grid-cols-1 gap-4">
          {filteredTasks.map((task: Task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ) : (
        view === "Table" &&
        filteredTasks && (
          <div className="w-full">
            <DataGrid
              rows={filteredTasks}
              columns={columns}
              checkboxSelection
              getRowId={(row) => row.id}
              className={dataGridClassNames}
              sx={dataGridSxStyles(isDarkMode)}
            />
          </div>
        )
      )}
    </div>
  );
};

export default PriorityPage;
