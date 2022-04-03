import { Routes, Route } from "react-router-dom";
import Document from "./page/document";
import Filter from "./page/filter";

import Home from "./page/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/document/:id" element={<Document />} />
        <Route path="/document" element={<Filter />} />
      </Routes>
    </>
  );
}

export default App;
