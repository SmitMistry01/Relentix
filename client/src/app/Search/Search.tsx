import { useEffect, useState } from "react";
import { useSearchQuery } from "../../state/api";
import { debounce } from "lodash";
import Header from "../../components/Header";
import TaskCard from "../../components/TaskCard";
import ProjectCard from "../../components/ProjectCard";
import UserCard from "../../components/UserCard";


const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: SearchResults,
    isLoading,
    isError,
  } = useSearchQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });

  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    500
  );

  useEffect(() => {
    return handleSearch.cancel;
  }, [handleSearch.cancel]);
  return (
    <>
      <div className="p-8">
        <Header name="Search" />
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 rounded border p-3 shadow"
          onChange={handleSearch}
        />
      </div>
      <div className="p-5">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error performing search...</p>}
        {!isLoading && !isError && SearchResults && (
            <div className="">
                {SearchResults.tasks && SearchResults.tasks?.length > 0 && (
                    <h2>Tasks</h2>
                )}
                {SearchResults.tasks?.map((task) => (
                    <TaskCard key = {task.id} task = {task}/>
                ))}
                {SearchResults.projects && SearchResults.projects?.length > 0 && (
                    <h2>Projects</h2>
                )}
                {SearchResults.projects?.map((project) => (
                    <ProjectCard key = {project.id} project = {project}/>
                ))}
                {SearchResults.users && SearchResults.users?.length > 0 && (
                    <h2>Users</h2>
                )}
                {SearchResults.users?.map((user) => (
                    <UserCard key = {user.userId} user = {user}/>
                ))}
            </div>
        )}
      </div>
    </>
  );
};

export default Search;
