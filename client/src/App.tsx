import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardWrapper from './app/DashboardWrapper';
import Settings from './components/Settings';
import Project from './app/projects/Project';

function App() {
  return (
    <BrowserRouter>
      <DashboardWrapper> 
        <Routes>
          <Route path="/" element={<div className='text-xl font-bold'>Welcome to Dashboard</div>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/projects/:projectId" element={<Project />} />
        </Routes>
      </DashboardWrapper>
    </BrowserRouter>
  );
}

export default App;
