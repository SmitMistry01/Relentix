import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: () => ({}),
});

export const {} = api;
