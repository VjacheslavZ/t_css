import React from "react";
import cx from "classnames";

import {AccordionOptions} from "../../constants";
import {ReactComponent as ChevronDown} from "../../assets/icons/chevron-down.svg";
import {ReactComponent as DropDownOption} from "../../assets/icons/dropdown_option.svg";

import s from "./styles.module.scss";
 import {useSelectedDocumentsContext} from "../../context/selectedDocumentsContext";

interface Props {
    data: AccordionOptions
    index: number
    handleOpen: (i: number) => void;
    activeIndex: number
}

export const AccordionSection: React.FC<Props> = ({data, handleOpen, activeIndex, index}) => {
    const isOpen = activeIndex === index;
    const {handleSelectOption} = useSelectedDocumentsContext();
    return (
        <div>
            <div
                className={cx(`${isOpen ? 'bg-gray-100' : 'bg-gray-50'}`, s.buttonContainer)}
                onClick={() => handleOpen(index)}
            >
                <button className={s.button}>
                    <span className={s.buttonText}>{data.title}</span>
                    <ChevronDown className={`${isOpen && 'rotate-180'} transition-all`}/>
                </button>
            </div>

            <ul className={`overflow-hidden h-0 ${isOpen && 'h-full p-2'}`}>
                {data.options.map(({value, label}, index) => (
                    <li
                        key={value}
                        className={`flex px-1.5 py-2 align-baseline justify-between ${index && 'mt-2.5'}`}
                    >
                        <span
                            className={s.label}>{label}</span>
                        <DropDownOption
                            onClick={() => handleSelectOption({ value, label })}
                            className="hover:cursor-pointer"
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AccordionSection