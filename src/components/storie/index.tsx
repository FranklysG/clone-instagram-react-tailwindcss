import { PlusCircleIcon } from "@heroicons/react/solid";

import perfil from "../../assets/perfil.jpg";

export function Storie() {
  return (
    <div className="grid justify-items-center px-2">
      <img src={perfil} className="w-14 h-14 rounded-full" />
      <p className="text-xs mt-1">
        Seu stories
        <PlusCircleIcon className="w-6 h-6 text-cyan-700 relative bottom-10 left-10" />
      </p>
    </div>
  );
}
