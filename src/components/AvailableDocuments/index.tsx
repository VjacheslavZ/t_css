import React from "react";

import Container from "../Container";
import DocumentSelectorTitle from "../DocumentSelectorTitle";
import Search from "../Search";


const AvailableDocuments = (): React.ReactElement => {
    return (
        <Container>
            <DocumentSelectorTitle title="Available Documents"/>
            <Search/>
        </Container>
    );
}

export default AvailableDocuments;