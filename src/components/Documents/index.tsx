import {ReactElement} from "react";

import SectionTitle from "../SectionTitle";
import Toggle from "../Toggle";

const Documents = (): ReactElement => {
    return (
        <div className="mt-5 w-full">
            <div className="px-1 flex justify-between items-center">
                <SectionTitle title="53 Available Documents"/>
                <Toggle />
            </div>
        </div>
    )
}

export default Documents