import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardWrapper from './app/DashboardWrapper';
import Settings from './components/Settings';
import Project from './app/projects/Project';
import Timeline from './app/Timeline/Timeline';
import Search from './app/Search/Search';
import Users from './app/Users/Users';
import Teams from './app/Teams/Teams';
import Home from './app/Home/Home';
import PriorityPage from './app/Priority/Priority';

function App() {
  return (
    <BrowserRouter>
      <DashboardWrapper> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/settings" element={<Settings />} />
          <Route path="/search" element={<Search />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/users" element={<Users />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route
            path="/priority/:priority"
            element={
              <PriorityPage />
            }
          />
        </Routes>
      </DashboardWrapper>
    </BrowserRouter>
  );
}

export default App;
