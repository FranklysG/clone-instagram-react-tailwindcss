import {
  ChatIcon,
  CameraIcon
} from "@heroicons/react/solid";

import logo from '../../assets/logo.png';

export function Header() {
  return (
    <nav className="flex justify-between items-center px-3 border-b-2 border-black-400">
      <div className="flex space-x-4">
        <CameraIcon className="h-7 w-7 text-dark-500" />
      </div>
      <div className="w-32"><img src={logo} /></div>
      <div className="flex space-x-4">
        <ChatIcon className="h-7 w-7 text-dark-500" />
      </div>
    </nav>
  );
}
