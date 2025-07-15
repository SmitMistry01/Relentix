import type { Task, Task as TaskType } from "../state/api";
import { format } from "date-fns";
import { BadgeCheck, CalendarDays, Tag } from "lucide-react";

type TaskProps = {
  task: Task;
};

const statusColor: Record<string, string> = {
  "To Do": "#2563EB",
  "Work In Progress": "#059669",
  "Under Review": "#D97706",
  Completed: "#000000",
};

const TaskCard = ({ task }: TaskProps) => {
  const formattedDueDate = task.dueDate
    ? format(new Date(task.dueDate), "P")
    : "Not set";
  const tags = task.tags ? task.tags.split(",") : [];

  
    const PriorityTag = ({ priority }: { priority: TaskType["priority"] }) => (
      <div
        className={`rounded-full px-2 py-1 text-xs font-semibold ${
          priority === "Urgent"
            ? "bg-red-200 text-red-700"
            : priority === "High"
              ? "bg-yellow-200 text-yellow-700"
              : priority === "Medium"
                ? "bg-green-200 text-green-700"
                : priority === "Low"
                  ? "bg-blue-200 text-blue-700"
                  : "bg-gray-200 text-gray-700"
        }`}
      >
        {priority}
      </div>
    );
  return (
    <div className="rounded-lg bg-white p-5 shadow-md transition hover:shadow-lg dark:bg-dark-secondary dark:text-white">
      {/* Attachment */}
      {task.attachments && task.attachments?.length > 0 && (
        <div className="mb-4">
          <img
            src={`https://relentix-s3-images.s3.us-east-1.amazonaws.com/${task.attachments[0].fileURL}`}
            alt={task.attachments[0].fileName}
            className="w-full rounded-md object-cover max-h-52"
          />
        </div>
      )}

      {/* Title and Description */}
      <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
        {task.title}
      </h3>
      <p className="mb-3 text-sm text-gray-600 dark:text-neutral-400">
        {task.description || "No description provided"}
      </p>

      {/* Meta Info */}
      <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
        <span
          className="rounded-full px-3 py-1 text-white"
          style={{ backgroundColor: statusColor[task.status as string] || "#6B7280" }}
        >
          <BadgeCheck className="mr-1 inline h-4 w-4" />
          <strong>Status:</strong> {task.status}
        </span>

        <span className={`rounded-full px-3 py-1`}>
          {task.priority && <PriorityTag priority={task.priority} />}
        </span>

        <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-neutral-800">
          <CalendarDays className="mr-1 inline h-4 w-4 text-green-600" />
          <strong>Due:</strong> {formattedDueDate}
        </span>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300"
            >
              <Tag className="h-3 w-3" /> {tag}
            </span>
          ))}
        </div>
      )}

      {/* Dates */}
      {/* <div className="mb-3 text-xs text-gray-500 dark:text-neutral-400">
        <div>
          <strong>Start:</strong> {formattedStartDate}
        </div>
        <div>
          <strong>Due:</strong> {formattedDueDate}
        </div>
      </div> */}

      {/* People */}
      <div className="flex items-center gap-4">
        {task.assignee && (
          <div className="flex items-center gap-2 text-sm">
            <img
              src={`https://relentix-s3-images.s3.us-east-1.amazonaws.com/${task.assignee.profilePictureUrl!}`}
              alt={task.assignee.username}
              className="h-7 w-7 rounded-full object-cover"
            />
            <span>{task.assignee.username}</span>
          </div>
        )}
        {task.author && (
          <div className="flex items-center gap-2 text-sm">
            <img
              src={`https://relentix-s3-images.s3.us-east-1.amazonaws.com/${task.author.profilePictureUrl!}`}
              alt={task.author.username}
              className="h-7 w-7 rounded-full object-cover"
            />
            <span>{task.author.username}</span>
          </div>
        )}
      </div>
    </div>
  );
};


export default TaskCard;
