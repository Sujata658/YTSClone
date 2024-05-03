import Button from "../../General/Button"
import notfoundImage from '../../../assets/movies/imagenotfound.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

interface ImageCardProps{
  img?: string;
  bgimg?: string;
}

export const ImageCard = ({img}: ImageCardProps) => {
  return (
    <>
    <div className="grid grid-rows-8 gap-5 h-[75vh]" >

      <div className="row-span-6 h-full">
        {
          img === undefined? <img src={notfoundImage}></img> :img && <img src={img} alt="" className="rounded border-8 border-white h-full w-full"/>
        }
      </div>
      <Button background={"bg-[#5da93c]"} content={"Download"} leading={<FontAwesomeIcon icon={faDownload}/>}/>
      <Button background="bg-[#0bae9f]" content={"Watch Now"}/>
    </div>
    </>
  )
}