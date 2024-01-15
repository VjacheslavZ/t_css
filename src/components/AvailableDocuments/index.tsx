import {ReactElement} from "react";

import Search from "../Search";
import Container from "../Container";
import FiltersContainer from "../FiltersContainer";
import DocumentSelectorTitle from "../DocumentSelectorTitle";
import Documents from "../Documents";


const AvailableDocuments = (): ReactElement => {
    return (
        <Container>
            <DocumentSelectorTitle title="Available Documents"/>
            <div className="mt-3 w-full">
                <Search/>
            </div>
            <FiltersContainer />
            <Documents />
        </Container>
    );
}

export default AvailableDocuments;