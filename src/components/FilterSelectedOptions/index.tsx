import React from "react";
import cx from 'classnames';
import s from "./styles.module.scss";

import {ReactComponent as RemoveIcon} from "../../assets/icons/icon_close.svg";
import {Option} from "../../constants";

interface Props {
    selectedOptions: Array<Option>
}

const FilterSelectedOptions: React.FC<Props> = ({selectedOptions}) => (
    <div className={s.container}>
        {selectedOptions.map((option) => (
            <div
                key={option.value}
                className={cx(s.item, {
                    'bg-blue-100 text-blue-500': option.type_id === 'location' || option.type_id === 'subsidiary',
                    'bg-green-100 text-green-500': option.type_id === 'seniority',
                    'bg-purple-100 text-purple-500': option.type_id === 'job',
                })}
            >
                <span>{option.label}</span>
                <button className='ml-1'>
                    <RemoveIcon className={cx({
                        'fill-blue-500': option.type_id === 'location' || option.type_id === 'subsidiary',
                        'fill-green-500': option.type_id === 'seniority',
                        'fill-purple-500': option.type_id === 'job',
                    })}/>
                </button>
            </div>
        ))}
    </div>
)

export default FilterSelectedOptions;