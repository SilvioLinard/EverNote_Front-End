import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesScreen from "./screens/notes/index";
import UserEditScreen from "./screens/users/edit";
import PrivateRoute from "./components/auth/private_route";

const Search = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />

      {/* Agrupa rotas privadas */}
      <Route element={<PrivateRoute />}>
        <Route path="/notes" element={<NotesScreen />} />
        <Route path="/users/edit" element={<UserEditScreen />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Search;
