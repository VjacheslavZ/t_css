import React from 'react';

import AvailableDocuments from "./components/AvailableDocuments";
import SelectedDocuments from "./components/SelectedDocuments";

function App() {
    return (
        <div className="App">
            <div className="p-20 flex justify-between w-[1200px]">
                <AvailableDocuments/>
                <SelectedDocuments/>
            </div>
        </div>
    );
}

export default App;
