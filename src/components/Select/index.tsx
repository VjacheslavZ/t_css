import {FC} from "react";
import cx from 'classnames';

import {ReactComponent as ChevronDown} from "../../assets/icons/chevron-down.svg";
import s from "./styles.module.scss";
import Search from "../Search";
import {Option} from "../../constants";

interface Props {
    name: string;
    options: Option[];
    selectedOptions: Option[];
    addOption: (option: Option) => void;
}

const Select: FC<Props> = ({name, options, addOption, selectedOptions}) => (
    <div className={s.container}>
        <div className="group">
            <button className={s.select}>
                <span>{name}</span>
                <ChevronDown/>
            </button>

            <div className={cx("hidden group-hover:block", s.searchContainer)}>
                <div className="pb-1">
                    <Search/>
                </div>
                <ul className={s.list}>
                    {options.map((option) => {
                        const isSelected = selectedOptions.find((selectedOption) => selectedOption.value === option.value);
                        if (isSelected) {
                            return null;
                        }
                        return (
                            <li
                                onClick={() => addOption(option)}
                                key={option.value}
                                value={option.value}
                                className={s.item}
                            >
                                {option.label}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
)

export default Select