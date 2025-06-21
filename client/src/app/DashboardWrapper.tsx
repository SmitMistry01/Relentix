'use client'

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useAppSelector } from "./redux";
import { useEffect } from "react";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  })
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* Sidebar */}
        <Sidebar />

      {/* Main Content */}
      <div className={` w-full flex flex-col overflow-hidden bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "":"md:pl-64"}`}>
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};


export default DashboardWrapper;
