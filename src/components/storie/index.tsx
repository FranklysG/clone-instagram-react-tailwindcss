import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
// import { faPlusCircle } from '@fortawesome/free-regular-svg-icons'

import perfil from "../../assets/perfil.jpg";

export function Storie() {
  return (
    <div className="grid justify-items-center px-2">
      <img src={perfil} className="w-14 h-14 rounded-full" />
      <p className="text-xs mt-1">
        Seu stories
      </p>
      <FontAwesomeIcon icon={faPlusCircle} size="lg" className="text-cyan-700 relative bottom-11 left-6" />
    </div>
  );
}
