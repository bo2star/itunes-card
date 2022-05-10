import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Albums from "./containers/Albums";
import PageLayout from "./containers/PageLayout";
import Songs from "./containers/Songs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/songs" element={<Songs />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/" element={<Navigate replace to="/songs" />} />
      </Route>
    </Routes>
  );
}

export default App;
