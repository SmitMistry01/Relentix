import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export var Status;
(function (Status) {
    Status["ToDo"] = "To Do";
    Status["WorkInProgress"] = "Work In Progress";
    Status["UnderReview"] = "Under Review";
    Status["Completed"] = "Completed";
})(Status || (Status = {}));
export var Priority;
(function (Priority) {
    Priority["Urgent"] = "Urgent";
    Priority["High"] = "High";
    Priority["Medium"] = "Medium";
    Priority["Low"] = "Low";
    Priority["Backlog"] = "Backlog";
})(Priority || (Priority = {}));
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL,prepareHeaders: async (headers) => {
      const session = await fetchAuthSession();
      const { accessToken } = session.tokens ?? {};
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    }, }),
    reducerPath: "api",

    tagTypes: ["Projects", "Tasks", "Users", "Teams"],
    endpoints: (build) => ({
        getAuthUser: build.query({
      queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ) => {
        try {
          const user = await getCurrentUser();
          const session = await fetchAuthSession();
          if (!session) throw new Error("No session found");
          const { userSub } = session;

          const userDetailsResponse = await fetchWithBQ(`users/${userSub}`);
          const userDetails = userDetailsResponse.data;

          return { data: { user, userSub, userDetails } };
        } catch (error) {
          return { error: error.message || "Could not fetch user data" };
        }
      },
    }),
        getProjects: build.query({
            query: () => "projects",
            providesTags: ["Projects"],
        }),
        createProject: build.mutation({
            query: (project) => ({
                url: "projects",
                method: "POST",
                body: project,
            }),
            invalidatesTags: ["Projects"],
        }),
        getTasks: build.query({
            query: ({ projectId }) => `tasks?projectId=${projectId}`,
            providesTags: (result) => result
                ? result.map(({ id }) => ({ type: "Tasks", id }))
                : [{ type: "Tasks" }],
        }),
        getTasksByUser: build.query({
              query: (userId) => `tasks/user/${userId}`,
              providesTags: (result, _error, userId) =>
                result
                  ? result.map(({ id }) => ({ type: "Tasks", id }))
                  : [{ type: "Tasks", id: userId }],
            }),
        createTask: build.mutation({
            query: (task) => ({
                url: "/tasks",
                method: "POST",
                body: task,
            }),
            invalidatesTags: ["Tasks"],
        }),
        updateTaskStatus: build.mutation({
            query: ({ taskId, status }) => ({
                url: `tasks/${taskId}/status`,
                method: "PATCH",
                body: { status },
            }),
            invalidatesTags: (_result, _error, { taskId }) => [
                { type: "Tasks", id: taskId },
            ],
        }),
        search: build.query({
            query: (query) => `search?query=${query}`
        }),
        getUsers: build.query({
            query: () => "users",
            providesTags: ["Users"]
        }),
        getTeams: build.query({
            query: () => "teams",
            providesTags: ["Teams"],
        }),
    }),
});
export const { useGetProjectsQuery, useCreateProjectMutation, useGetTasksQuery, useCreateTaskMutation, useUpdateTaskStatusMutation, useSearchQuery, useGetUsersQuery, useGetTeamsQuery, useGetTasksByUserQuery, useGetAuthUserQuery, } = api;
