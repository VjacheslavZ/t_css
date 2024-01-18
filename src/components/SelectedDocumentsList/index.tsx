import {ReactElement} from "react";
import cx from "classnames";

import {ReactComponent as CheckIc} from "../../assets/icons/check.svg";
import {ReactComponent as RemoveIc} from "../../assets/icons/remove.svg";
import s from "./styles.module.scss";

import {useSelectedDocumentsContext} from "../../context/selectedDocumentsContext";

const SelectedDocumentsList = (): ReactElement => {
    const { selectedDocuments, handleDeleteOption } = useSelectedDocumentsContext();

    return (
        <div className="w-full border border-solid border-green-500 rounded-lg p-2 mt-3">
            <div>
                <ul>
                    {selectedDocuments.map(({value, label}, i) => (
                        <li key={value} className={cx(s.itemContainer, {'mt-3': !!i})}>
                            <span className={s.text}>
                                <CheckIc className='mr-2'/>{label}
                            </span>
                                <RemoveIc
                                    className="hover:cursor-pointer"
                                    onClick={() => handleDeleteOption({ value, label })}
                                />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SelectedDocumentsList;