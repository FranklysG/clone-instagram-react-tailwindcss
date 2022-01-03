import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import avatar from "../../assets/perfil.jpg";
import firstFeed from "../../assets/feed-01.jpg";
import {
  faBookmark,
  faCommentDots,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
export function Post() {
  return (
    <article className="border-y-2 border-black-400 -my-4">
      {/* avatar e o nome e os 3 pontinhos */}
      <section className="flex justify-between items-center p-3">
        <div className="flex">
          <img src={avatar} className="w-8 h-8 rounded-full m-1" alt=""/>
          <strong className="text-bold text-sm m-2 ">franklysg</strong>
        </div>
        <FontAwesomeIcon icon={faEllipsisH} />
      </section>
      {/* foto, coração do like, coment, send e salvar do outro lado */}
      <section className="">
        <img src={firstFeed} alt=""/>
        <div className="flex items-center justify-between py-1">
          <div className="">
            <FontAwesomeIcon icon={faHeart} size="2x" className="px-2" />
            <FontAwesomeIcon icon={faCommentDots} size="2x" className="px-2" />
            <FontAwesomeIcon icon={faPaperPlane} size="2x" className="px-2" />
          </div>
          <div>
            <FontAwesomeIcon icon={faBookmark} size="2x" className="px-2" />
          </div>
        </div>
      </section>
      {/* quem curtiu a foto */}
      <section className=""></section>
      {/* comentarios */}
      <section className=""></section>
    </article>
  );
}
