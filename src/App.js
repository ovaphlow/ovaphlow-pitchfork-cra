import { Routes, Route } from "react-router-dom";
import Document from "./page/Document";
import Filter from "./page/Filter";
import Home from "./page/Home";
import Setting from "./page/Setting";
import SettingList from "./page/SettingList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/document" element={<Filter />} />
        <Route path="/document/:id" element={<Document />} />
        <Route path="/setting" element={<SettingList />} />
        <Route path="/setting/:id" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
