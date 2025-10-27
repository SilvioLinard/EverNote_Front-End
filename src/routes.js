import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesScreen from "./screens/notes/index";
import UserEditScreen from "./screens/users/edit";

const Search = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/notes" element={<NotesScreen />} />
      <Route path="/users/edit" element={<UserEditScreen />} />
    </Routes>
  </BrowserRouter>
);

export default Search;
