import { FC } from "react";
import s from "./styles.module.scss";

interface Props {
    title: string;
};

const DocumentSelectorTitle: FC<Props> = ({ title }) => {
    return (
        <div className={s.title}>
            <span>{title}</span>
        </div>
    );
}

export default DocumentSelectorTitle;