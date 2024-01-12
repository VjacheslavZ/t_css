import { FC, ReactNode } from "react";
import s from "./styles.module.scss";

interface Props {
    children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
}

export default Container;