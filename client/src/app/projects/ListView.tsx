import { useGetTasksQuery} from "../../state/api";
import type { Task } from "../../state/api";
import Header from "../../components/Header";
import TaskCard from "../../components/TaskCard";

type ListProps = {
  projectId: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};
const List = ({projectId,setIsModalNewTaskOpen}: ListProps) => {
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({ projectId: Number(projectId) });

  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occured while fetching tasks</div>;
  
  return(
    <div className="px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header name = "List" buttonComponent={
          <button className=" rounded flex items:center bg-blue-primary px-3 py-2 text-white hover:bg-blue-600" onClick={() => setIsModalNewTaskOpen(true)}>Add Task</button>
        } isSmallText />
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks?.map((task:Task) => (
          <TaskCard key = {task.id} task = {task} />
        ))}
      </div>
    </div>
  )
}


export default List;