import {ReactElement} from "react";
import cx from "classnames";

import {ReactComponent as CheckIc} from "../../assets/icons/check.svg";
import {ReactComponent as RemoveIc} from "../../assets/icons/remove.svg";
import s from "./styles.module.scss";

const MOCK_ITEMS = [
    {
        value: 'Employee Handbook',
        id: 0,
    },
    {
        value: 'Company Drug Policy',
        id: 1,
    },
    {
        value: 'Tshirt Size Form',
        id: 2,
    },
    {
        value: 'Safety Manual',
        id: 3,
    },
    {
        value: 'Sexual Harassment Training Manual',
        id: 4,
    }
];

const SelectedDocumentsList = (): ReactElement => {
    return (
        <div className="w-full border border-solid border-green-500 rounded-lg p-2 mt-3">
            <div>
                <ul>
                    {MOCK_ITEMS.map(({value, id}, i) => (
                        <li key={id} className={cx(s.itemContainer, {'mt-3': !!i})}>
                            <span className={s.text}>
                                <CheckIc className='mr-2'/>{value}
                            </span>
                                <RemoveIc className="hover:cursor-pointer"/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SelectedDocumentsList;