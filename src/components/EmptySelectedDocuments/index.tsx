import React from "react";


import s from "./styles.module.scss"
import {ReactComponent as RightArrowIc} from "../../assets/icons/right-arrow.svg";

const EmptySelectedDocuments: React.FC = () => {
    return (
        <div className={s.container}>
            <RightArrowIc />
            <p className={s.title}>
                Select documents from the left panel to have employees review them and provide a signature acknowledging review
            </p>
        </div>
    )
}

export default EmptySelectedDocuments