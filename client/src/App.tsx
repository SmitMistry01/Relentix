import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardWrapper from './app/DashboardWrapper';
import Settings from './components/Settings';
import Project from './app/projects/Project';
import Timeline from './app/Timeline/Timeline';
import Search from './app/Search/Search';
import Users from './app/Users/Users';
import Teams from './app/Teams/Teams';

function App() {
  return (
    <BrowserRouter>
      <DashboardWrapper> 
        <Routes>
          <Route path="/" element={<div className='text-xl font-bold'>Welcome to Dashboard</div>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/search" element={<Search />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/users" element={<Users />} />
          <Route path="/projects/:projectId" element={<Project />} />
        </Routes>
      </DashboardWrapper>
    </BrowserRouter>
  );
}

export default App;
