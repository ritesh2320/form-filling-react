import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Axios from "axios";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </>
  );
};

export default App;
