import {FC} from "react";
import cx from 'classnames';

import {ReactComponent as ChevronDown} from "../../assets/icons/chevron-down.svg";
import s from "./styles.module.scss";
import Search from "../Search";
import {Option} from "../../constants";

interface Props {
    name: string;
    options: Option[]
}

const Select: FC<Props> = ({name, options}) => {
    return (
        <div className={s.container}>
            <div className="group">
                <button className={s.select}>
                    <span>{name}</span>
                    <ChevronDown/>
                </button>

                <div className={cx("hidden group-hover:block", s.searchContainer)}>
                    <div className="pb-1">
                        <Search />
                    </div>
                    <ul className={s.list}>
                        {options.map(({label, value}) => (
                            <li key={value} value={value} className={s.item}>{label}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Select