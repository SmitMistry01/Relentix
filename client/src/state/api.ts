import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  createProject,
  getProjects,
} from "./../../../server/src/controllers/projectController";
import { getTasks } from './../../../server/src/controllers/taskController';

export interface Project {
  id: number;
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

export type Priority = "Urgent" | "High" | "Medium" | "Low" | "Backlog";

export type Status =
  | "To Do"
  | "Work In Progress"
  | "Under Review"
  | "Completed";

export interface User {
  userId?: number;
  username: string;
  email: string;
  profilePictureUrl?: string;
  cognitoId?: string;
  teamId?: number;
}

export interface Attachment {
  id: number;
  fileURL: string;
  fileName: string;
  taskId: number;
  uploadedById: number;
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  status?: Status;
  priority?: Priority;
  tags?: string;
  startDate?: string;
  dueDate?: string;
  points?: number;
  projectId: number;
  authorUserId?: number;
  assignedUserId?: number;

  author?: User;
  assignee?: User;
  comments?: Comment[];
  attachments?: Attachment[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  reducerPath: "api",

  tagTypes: ["Projects"],
  endpoints: (build) => ({
    getProjects: build.query<Project[], void>({
      query: () => "projects",
      providesTags: ["Projects"],
    }),

    createProject: build.mutation<Project, Partial<Project>>({
      query: (project) => ({
        url: "projects",
        method: "post",
        body: project,
      }),
      invalidatesTags: ["Projects"],
    }),
     getTasks: build.query<Task[], {projectId:number}>({
      query: () => "projects",
      providesTags: ["Projects"],
    }),
  }),
});

export const { useGetProjectsQuery, useCreateProjectMutation } = api;
