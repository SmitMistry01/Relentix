'use client'

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

// const DashboardWrapper = ({children} : {children:React.ReactNode}) => {
//   return(
//     <StoreProvider>
//       <DashboardLayout>{children}</DashboardLayout>
//     </StoreProvider>
//   )
// }

export default DashboardWrapper;
