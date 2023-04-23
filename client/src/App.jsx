import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-gray-400 sm:px-8 px-4 py-4 ">
        <Link to="/">
        {/* <Link to="https://chat.openai.com" target="_blank"> */}
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        <Link to="/create-post" className="font-inter font-medium bg-indigo-500 text-white px-4 py-2 rounded-md">
          Create
        </Link>
      </header>
      <main className="sm: p-8 px-4 py-8 w-full bg-gray-200 min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
