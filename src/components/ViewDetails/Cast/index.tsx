import { Cast } from "../../../types/Cast";
import Avatar from "../../General/Avatar";

interface CastsProps { 
    casts: Cast[] | undefined;
  }
  
  export const Casts = ({ casts }: CastsProps) => { 
    return (
        <>
        <div>

        <div className="font-bold">Cast</div>
        <div className=" flex flex-col gap-2 divide-y-2 divide-slate-400">
            {
                casts?.map((cast)=>{
                    return <>
                    <div className="flex py-1 items-center gap-4 text-sm text-[#919191]">

                        <div>
                            <Avatar imageUrl={cast.url_small_image}/>
                        </div>
                        <div>
                            {cast.name} as <span className="text-white font-bold">{cast.character_name}
                                </span>
                        </div>

                    </div>
                    </>
                })
            }
        </div>
        </div>
        </>
    );
  }
  