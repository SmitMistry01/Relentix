import { Menu, Moon, Settings, Sun, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '../state';
import { useGetAuthUserQuery } from '../state/api';
import { signOut } from 'aws-amplify/auth';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const { data: currentUser } = useGetAuthUserQuery({});

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const currentUserDetails = currentUser?.user?.signInDetails?.loginId;
  if (!currentUser) return null;

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* Left: Sidebar toggle + Search */}
      <div className="flex items-center gap-8">
        {!isSidebarCollapsed ? null : (
          <button onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
            <Menu className="h-8 w-8 dark:text-white" />
          </button>
        )}
        <span
  className={`${
    isDarkMode ? "text-white" : "text-gray-800"
  } font-bold tracking-wide text-2xl uppercase`}
>
  Relentix
</span>

      </div>

      <div className="flex items-center gap-4">
        
        <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
          ) : (
            <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
          )}
        </button>

        {/* Settings */}
        <Link
          to="/settings"
          className="h-min w-min rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
        </Link>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>

        {/* Profile & Sign Out */}
        <div className="flex items-center gap-5">
          <div className="">
            {!currentUserDetails ? (
              null
            ) : (
              <div className="flex items-center gap-2">
                <User className={isDarkMode ? "text-white" : "text-gray-800"} />
                <span className="font-bold text-xl text-gray-800 dark:text-white">{currentUserDetails}</span>
              </div>
            )}
          </div>
          
          <button
            className="rounded bg-blue-500 px-4 py-2 text-xs font-bold text-white hover:bg-blue-600"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
