import React from "react";
import { Routes, Route } from "react-router-dom";
import Document from "./pages/Document";
import DocumentApprovePjsy from "./pages/DocumentApprovePjsy";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Stats from "./pages/Stats";
import SettingList from "./pages/SettingList";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import UserList from "./pages/UserList";
import UploadSchedule from "./pages/UploadSchedule";
import Review from "./pages/Review";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/document/review" element={<Review />} />
                <Route path="/document/:id/:title/review" element={<Review />} />
                <Route path="/document/:id/:title/approve/pjsy" element={<DocumentApprovePjsy />} />
                <Route path="/document/:id" element={<Document />} />
                <Route path="/document" element={<Filter />} />
                <Route path="/upload-schedule" element={<UploadSchedule />} />
                <Route path="/setting/:id" element={<Setting />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/setting" element={<SettingList />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="/user" element={<UserList />} />
            </Routes>
        </>
    );
}

export default App;
