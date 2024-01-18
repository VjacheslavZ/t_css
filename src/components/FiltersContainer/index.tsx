import { FC, useState} from "react";

import Select from "../Select";
import SectionTitle from "../SectionTitle";
import {
    MOCK_JOB_TEMPLATES_OPTIONS,
    MOCK_LOCATION_OPTIONS,
    MOCK_SUBSIDIARY_OPTIONS,
    MOCK_SENIORITY_OPTIONS,
    Option
} from "../../constants";
import FilterSelectedOptions from "../FilterSelectedOptions";

const FiltersContainer: FC = () => {
    const [selectedOptions, setSelectedOptions] = useState<Array<Option>>([]);

    const handleAddSelectedOption = (option: Option) => setSelectedOptions([...selectedOptions, option])
    const handleRemoveSelectedOption = (option: Option) => setSelectedOptions(selectedOptions.filter(item => item.value !== option.value))

    return (
        <div className="pt-1 w-full">
            <SectionTitle title="Filter by:"/>

            <div className="w-full flex justify-between relative">
                <Select
                    name="Job Templates"
                    addOption={handleAddSelectedOption}
                    selectedOptions={selectedOptions}
                    options={MOCK_JOB_TEMPLATES_OPTIONS}
                />
                <Select
                    name="Locations"
                    addOption={handleAddSelectedOption}
                    selectedOptions={selectedOptions}
                    options={MOCK_LOCATION_OPTIONS}
                />
            </div>

            <div className="w-full flex justify-between relative mt-1">
                <Select
                    name="Subsidiary"
                    addOption={handleAddSelectedOption}
                    selectedOptions={selectedOptions}
                    options={MOCK_SUBSIDIARY_OPTIONS}
                />
                <Select
                    name="Seniority"
                    addOption={handleAddSelectedOption}
                    selectedOptions={selectedOptions}
                    options={MOCK_SENIORITY_OPTIONS}
                />
            </div>

            {!!selectedOptions.length && (
                <div className="mt-3">
                    <FilterSelectedOptions selectedOptions={selectedOptions} handleRemoveSelectedOption={handleRemoveSelectedOption}/>
                </div>
            )}
        </div>
    );
}

export default FiltersContainer;