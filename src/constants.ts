export interface Option {
    label: string;
    value: string | number;
    type_id?: "job" | "location" | "subsidiary" | "seniority";
}

export const MOCK_JOB_TEMPLATES_OPTIONS: Array<Option> = [
    {
        label: "Heavy Equipment Operator",
        value: "heavy_equipment_operator",
        type_id: "job",
    },
    {
        label: "Heavy Equipment Service Technician",
        value: "heavy_equipment_service_technician",
        type_id: "job",
    },
    {
        label: "Equipment Operator",
        value: "equipment_operator",
        type_id: "job",
    },
    {
        label: "Track Foreman",
        value: "track_foreman",
        type_id: "job",
    },
    {
        label: "Track Laborer",
        value: "track_laborer",
        type_id: "job",
    },
    {
        label: "Track Machine Operator",
        value: "track_machine_operator",
        type_id: "job",
    },
    {
        label: "Asphalt Plant Foreman",
        value: "asphalt_plant_foreman",
        type_id: "job",
    },
    {
        label: "Concrete Paving Foreman",
        value: "concrete_paving_foreman",
        type_id: "job",
    },
    {
        label: "Construction Quality Control Technician",
        value: "construction_quality_control_technician",
        type_id: "job",
    },
    {
        label: "Grade Foreman",
        value: "grade_foreman",
        type_id: "job",
    },
    {
        label: "Grinding Operator",
        value: "grinding Operator",
        type_id: "job",
    },
    {
        label: "Heavy Equipment Mechanic",
        value: "heavy_equipment_mechanic",
        type_id: "job",
    },
    {
        label: "Loader Operator",
        value: "loader_operator",
        type_id: "job",
    },
    {
        label: "Off Road Truck Driver",
        value: "off_road_truck_driver",
        type_id: "job",
    },
]
export const MOCK_LOCATION_OPTIONS: Array<Option> = [
    {
        label: "New York, NY",
        value: "new_york_NY",
        type_id: "location",
    },
    {
        label: "Los Angeles, CA",
        value: "los_angeles_CA",
        type_id: "location",
    },
    {
        label: "San Francisco, CA",
        value: "san_francisco_CA",
        type_id: "location",
    },
    {
        label: "Miami, FL",
        value: "miami_FL",
        type_id: "location",
    },
    {
        label: "Chicago, IL",
        value: "chicago_IL",
        type_id: "location",
    },
    {
        label: "Boston, MA",
        value: "boston_MA",
        type_id: "location",
    },
    {
        label: "Houston, TX",
        value: "houston_TX",
        type_id: "location",
    },
    {
        label: "Austin, TX",
        value: "austin_TX",
        type_id: "location",
    },
]
export const MOCK_SENIORITY_OPTIONS: Array<Option> = [
    {
        label: "Entry-Level Position",
        value: "entry_level_position",
        type_id: "seniority",
    },
    {
        label: "Individual Contributor",
        value: "individual_contributor",
        type_id: "seniority",
    },
    {
        label: "Manager",
        value: "manager",
        type_id: "seniority",
    },
    {
        label: "Office Staff",
        value: "office_staff",
        type_id: "seniority",
    },
    {
        label: "Leadership / Management",
        value: "leadership_management",
        type_id: "seniority",
    },
]
export const MOCK_SUBSIDIARY_OPTIONS: Array<Option> = [
    {
        label: "SUBSIDIARY",
        value: "SUBSIDIARY",
        type_id: "subsidiary",
    },
]

export interface AccordionOptions {
    title: string;
    options: Array<Option>;
}

export const ACCORDION_NON_COMPETE_AGREEMENTS_OPTIONS: AccordionOptions = {
    title: "Non-Compete Agreements",
    options: [
        {
            label: "Alabama - Non-Compete Agreement",
            value: 0,
        },
        {
            label: "California - Non-Compete Agreement",
            value: 1,
        },
        {
            label: "Colorado - Non-Compete Agreement",
            value: 2,
        },
        {
            label: "Florida - Non-Compete Agreement",
            value: 3,
        },
        {
            label: "Illinois - Non-Compete Agreement",
            value: 4,
        },
        {
            label: "Kansas - Non-Compete Agreement",
            value: 5,
        },
        {
            label: "New York - Non-Compete Agreement",
            value: 6,
        },
        {
            label: "Utah - Non-Compete Agreement",
            value: 7,
        },
    ]
}

export const ACCORDION_DRRUG_POLICIES_OPTIOS: AccordionOptions = {
    title: "Drug Policies",
    options: ACCORDION_NON_COMPETE_AGREEMENTS_OPTIONS.options,
}
export const ACCORDION_EMPLOYEE_HANDBOOKS_OPTIOS: AccordionOptions = {
    title: "Employee Handbooks",
    options: ACCORDION_NON_COMPETE_AGREEMENTS_OPTIONS.options,
}
export const ACCORDION_EQUIPMENT_SECTION_OPTIOS: AccordionOptions = {
    title: "Equipment Selection",
    options: ACCORDION_NON_COMPETE_AGREEMENTS_OPTIONS.options,
}

export const ACCORDION_PAYROLL_HANDBOOK_OPTIONS: AccordionOptions = {
    title: "Payroll Handbook",
    options: ACCORDION_NON_COMPETE_AGREEMENTS_OPTIONS.options,
}
export const ACCORDION_PTO_POLICY_OPTIONS: AccordionOptions = {
    title: "PTO Policy",
    options: ACCORDION_NON_COMPETE_AGREEMENTS_OPTIONS.options,
}
export const ACCORDION_SAFETY_MANUALS_OPTIONS: AccordionOptions = {
    title: "Safety Manuals",
    options: ACCORDION_NON_COMPETE_AGREEMENTS_OPTIONS.options,
}
export const ACCORDION_SEXUAL_HARASSMENT_OPTIONS = {
    title: "Sexual Harassment",
    options: ACCORDION_NON_COMPETE_AGREEMENTS_OPTIONS.options,
}