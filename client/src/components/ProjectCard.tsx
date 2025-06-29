import { Project } from "../state/api";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const formattedStartDate = project.startDate
    ? format(new Date(project.startDate), "P")
    : "Not set";

  const formattedEndDate = project.endDate
    ? format(new Date(project.endDate), "P")
    : "Not set";

  return (
    <div className="rounded-lg bg-white p-5 shadow-md transition hover:shadow-lg dark:bg-dark-secondary dark:text-white">
      <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
        {project.name}
      </h3>

      <p className="mb-3 text-sm text-gray-600 dark:text-neutral-400">
        {project.description || "No description provided"}
      </p>

      <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
        <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 dark:bg-neutral-800">
          <CalendarDays className="h-4 w-4 text-blue-600" />
          <strong>Start:</strong> {formattedStartDate}
        </span>

        <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 dark:bg-neutral-800">
          <CalendarDays className="h-4 w-4 text-green-600" />
          <strong>End:</strong> {formattedEndDate}
        </span>

      
      </div>

    </div>
  );
};

export default ProjectCard;
