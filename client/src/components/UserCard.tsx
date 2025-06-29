import { User } from "../state/api";
import { Mail, UserCircle2 } from "lucide-react";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md dark:bg-dark-secondary dark:text-white">
      <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
        {user.profilePictureUrl ? (
          <img
            src={user.profilePictureUrl}
            alt="profile picture"
            className="h-full w-full object-cover"
          />
        ) : (
          <UserCircle2 className="h-full w-full text-gray-500 p-1" />
        )}
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-900 dark:text-white">{user.username}</h3>
        <p className="text-sm text-gray-600 dark:text-neutral-400 flex items-center gap-1">
          <Mail className="h-4 w-4" /> {user.email}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
