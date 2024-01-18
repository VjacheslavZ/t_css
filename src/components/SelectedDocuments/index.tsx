import {ReactElement} from "react";

import Search from "../Search";
import Container from "../Container";
import DocumentSelectorTitle from "../DocumentSelectorTitle";
import EmptySelectedDocuments from "../EmptySelectedDocuments";
import SelectedDocumentsList from "../SelectedDocumentsList";
import {useSelectedDocumentsContext} from "../../context/selectedDocumentsContext";

const SelectedDocuments = (): ReactElement => {
    const { selectedDocuments } = useSelectedDocumentsContext();

    return (
        <Container>
            <DocumentSelectorTitle title="Selected Documents"/>
            <div className="mt-3 w-full">
                <Search/>
            </div>
            {selectedDocuments.length ? <SelectedDocumentsList /> : <EmptySelectedDocuments />}
        </Container>
    );
}

export default SelectedDocuments;