import React, {useState} from 'react'

import s from './styles.module.scss';
import { AccordionOptions } from "../../constants";
import AccordionSection from "./AccordionSection";

interface Props {
    data: AccordionOptions[]
}

const Accordion: React.FC<Props> = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleOpen = (index: number) => {
        if (activeIndex === index) {
            return setActiveIndex(0)
        }
        setActiveIndex(index)
    }
    return (
        <div className={s.container}>
            <div className="w-full">
                {data.map((options, i) => (
                    <AccordionSection
                        key={i + 1}
                        handleOpen={handleOpen}
                        activeIndex={activeIndex}
                        index={i + 1}
                        data={options}
                    />
                ))}
            </div>
        </div>
    )
}

export default Accordion