import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Index from "./pages/Index";
import NewClient from "./pages/NewClient";
import EditClient from "./pages/EditClient";
import SeeClient from "./pages/SeeClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="new" element={<NewClient />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path=":id" element={<SeeClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
