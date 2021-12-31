import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo.png';

export function Header() {
  return (
    <nav className="flex justify-between items-center px-3 border-b-2 border-black-400">
      <div className="flex space-x-4">
        <FontAwesomeIcon icon={faCamera} size="lg" className="text-dark-500" />
      </div>
      <div className="w-32"><img src={logo} /></div>
      <div className="flex space-x-4">
        <FontAwesomeIcon icon={faCommentDots} size="lg" className="text-dark-500" />
      </div>
    </nav>
  );
}
