import React, { createContext, useContext, useState } from "react";
import {Option} from "../constants";

interface ContextProps {
    handleSelectOption: (option: Option) => void,
    handleDeleteOption: (option: Option) => void
    selectedDocuments: Array<Option>
}
interface Props {
    children: React.ReactNode;
}

const SelectedDocumentsContext = createContext<ContextProps>({
    selectedDocuments: [],
    handleSelectOption: () => {},
    handleDeleteOption: () => {},
});

const SelectedDocumentsProvider = ({ children }: Props): React.ReactElement => {
    const [selectedDocuments, setSelectedDocuments] = useState<Array<Option>>([]);
    const handleSelectOption = (option: Option) => setSelectedDocuments([...selectedDocuments, option]);
    const handleDeleteOption = (option: Option) => {
        const filteredOptions = selectedDocuments.filter((selectedOption) => selectedOption.value !== option.value);
        setSelectedDocuments(filteredOptions);
    };

    return (
        <SelectedDocumentsContext.Provider
            value={{
                handleSelectOption,
                handleDeleteOption,
                selectedDocuments,
            }}
        >
            { children }
        </SelectedDocumentsContext.Provider>
    )
}

export default SelectedDocumentsProvider;
export const useSelectedDocumentsContext = (): ContextProps => useContext(SelectedDocumentsContext)