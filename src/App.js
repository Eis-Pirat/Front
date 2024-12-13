import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadImage from "./pages/UploadImage";
import Historique from "./pages/Historique";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/historique" element={<Historique />} />
      </Routes>
    </Layout>
  );
}

export default App;
