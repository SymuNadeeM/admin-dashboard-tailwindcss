import React from "react";
import { Route, Routes } from "react-router-dom";
import Cards from "../src/Components/Cards";
import Dashboard from "../src/Components/Dashboard";
import Forms from "../src/Components/Forms";
import Buttons from "./Components/Buttons";
import Charts from "./Components/Charts";
import Create from "./Components/Create";
import Login from "./Components/Login";
import Modals from "./Components/Modals";
import NotFound from "./Components/NotFound";
import Tables from "./Components/Tables";

import Layout from "./PageLayout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="form" element={<Forms />} />
        <Route path="cards" element={<Cards />} />
        <Route path="charts" element={<Charts />} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="modals" element={<Modals />} />
        <Route path="tables" element={<Tables />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="create" element={<Create />} />
    </Routes>
  );
}

export default App;
