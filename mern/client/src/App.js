import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/ui/navbar";
import RecordList from "./components/record/recordList";
import Edit from "./components/record/edit";
import Create from "./components/record/create";

const App = () => {
    return (
        <div>
            <Navbar />
            <div style={{ margin: 20 }}>
                <Routes>
                    <Route exact path="/" element={<RecordList />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
