import React from 'react';

import AvailableDocuments from "./components/AvailableDocuments";
import SelectedDocuments from "./components/SelectedDocuments";
import SelectedDocumentsProvider from "./context/selectedDocumentsContext";

function App() {
    return (
        <div className="App">
            <div className="p-20 flex justify-between w-[1200px]">
                <SelectedDocumentsProvider>
                    <AvailableDocuments/>
                    <SelectedDocuments/>
                </SelectedDocumentsProvider>
            </div>
        </div>
    );
}

export default App;
