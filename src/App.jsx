import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Index from "./pages/Index";
import NewClient from "./pages/NewClient";
import EditClient from "./pages/EditClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="new" element={<NewClient />} />
          <Route path="edit/:id" element={<EditClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
