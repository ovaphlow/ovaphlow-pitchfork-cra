import { Routes, Route } from "react-router-dom";
import Document from "./page/Document";
import DocumentApprovePjsy from "./page/DocumentApprovePjsy";
import Filter from "./page/Filter";
import Home from "./page/Home";
import Setting from "./page/Setting";
import SettingList from "./page/SettingList";
import SignIn from "./page/SignIn";
import User from "./page/User";
import UserList from "./page/UserList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/document/:id/:title/approve/pjsy" element={<DocumentApprovePjsy />} />
        <Route path="/document/:id" element={<Document />} />
        <Route path="/document" element={<Filter />} />
        <Route path="/setting/:id" element={<Setting />} />
        <Route path="/setting" element={<SettingList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/user" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
