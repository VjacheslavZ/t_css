import {ReactElement} from "react";

import Search from "../Search";
import Container from "../Container";
import FiltersContainer from "../FiltersContainer";
import DocumentSelectorTitle from "../DocumentSelectorTitle";
import Documents from "../Documents";
import Accordion from "../Accordion";
import {
    ACCORDION_DRRUG_POLICIES_OPTIOS,
    ACCORDION_EMPLOYEE_HANDBOOKS_OPTIOS,
    ACCORDION_EQUIPMENT_SECTION_OPTIOS,
    ACCORDION_NON_COMPETE_AGREEMENTS_OPTIONS,
    ACCORDION_PAYROLL_HANDBOOK_OPTIONS,
    ACCORDION_PTO_POLICY_OPTIONS,
    ACCORDION_SAFETY_MANUALS_OPTIONS,
    ACCORDION_SEXUAL_HARASSMENT_OPTIONS
} from "../../constants";


const accordionData = [
    ACCORDION_DRRUG_POLICIES_OPTIOS,
    ACCORDION_EMPLOYEE_HANDBOOKS_OPTIOS,
    ACCORDION_EQUIPMENT_SECTION_OPTIOS,
    ACCORDION_NON_COMPETE_AGREEMENTS_OPTIONS,
    ACCORDION_PAYROLL_HANDBOOK_OPTIONS,
    ACCORDION_PTO_POLICY_OPTIONS,
    ACCORDION_SAFETY_MANUALS_OPTIONS,
    ACCORDION_SEXUAL_HARASSMENT_OPTIONS
];

const AvailableDocuments = (): ReactElement => {
    return (
        <Container>
            <DocumentSelectorTitle title="Available Documents"/>
            <div className="mt-3 w-full">
                <Search/>
            </div>
            <FiltersContainer/>
            <Documents/>
            <div className="mt-5 w-full">
                <Accordion data={accordionData}/>
            </div>
        </Container>
    );
}

export default AvailableDocuments;