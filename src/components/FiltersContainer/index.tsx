import {ReactElement} from "react";

import Select from "../Select";
import SectionTitle from "../SectionTitle";
import {
    MOCK_JOB_TEMPLATES_OPTIONS,
    MOCK_LOCATION_OPTIONS,
    MOCK_SUBSIDIARY_OPTIONS,
    MOCK_SENIORITY_OPTIONS
} from "../../constants";

const FiltersContainer = (): ReactElement => {
    return (
        <div className="pt-1 w-full">
            <SectionTitle title="Filter by:"/>

            <div className="w-full flex justify-between relative">
                <Select name="Job Templates" options={MOCK_JOB_TEMPLATES_OPTIONS}/>
                <Select name="Locations" options={MOCK_LOCATION_OPTIONS}/>
            </div>

            <div className="w-full flex justify-between relative mt-1">
                <Select name="Subsidiary" options={MOCK_SUBSIDIARY_OPTIONS}/>
                <Select name="Seniority" options={MOCK_SENIORITY_OPTIONS}/>
            </div>
        </div>
    );
}

export default FiltersContainer;