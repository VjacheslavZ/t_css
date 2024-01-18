import {ReactElement} from "react";

import Search from "../Search";
import Container from "../Container";
import DocumentSelectorTitle from "../DocumentSelectorTitle";

const SelectedDocuments = (): ReactElement => {
    return (
        <Container>
            <DocumentSelectorTitle title="Selected Documents"/>
            <div className="mt-3 w-full">
                <Search/>
            </div>
        </Container>
    );
}

export default SelectedDocuments;