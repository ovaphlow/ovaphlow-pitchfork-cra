import { Routes, Route } from "react-router-dom";
import Document from "./page/document";

import Home from "./page/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/document/:id" element={<Document />} />
      </Routes>
    </>
  );
}

export default App;
