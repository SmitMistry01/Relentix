import './App.css'
import DashboardWrapper from './app/DashboardWrapper'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from './components/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <DashboardWrapper>
            <h3 className='text-xl font-bold'>
              This is the Dashboard Layout
            </h3>
          </DashboardWrapper>
        } />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
