import { Cast } from "../../../types/Cast";
import { Casts as CastsComponent } from "../Cast";
import { Director } from "../Director";
import { Summary } from "../Summary";

interface PlotCastProps {
    summary: string | undefined;
    cast: Cast[];
}

export const PlotCast = ({ summary, cast }: PlotCastProps) => {
    return (
        <>
            <div className="grid grid-cols-5 mx-32 py-8 gap-16">
                <div className="col-span-3">

                    <Summary summary={summary} />
                </div>
                <div className="col-span-2 flex flex-col gap-8">

                    <Director />
                    <CastsComponent casts={cast} />
                </div>
            </div>
        </>
    );
}