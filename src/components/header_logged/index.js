import React, { useState } from "react";
import { Navbar, Container, Button, Form } from "react-bulma-components";
import { Link, useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import LogoImage from "../../assets/images/logo-white.png";
import "../../styles/notes.scss";
import UserService from "../../services/users";

function HeaderLogged({ onSelectNote }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const logOut = () => {
    UserService.logOut();
    navigate("/");
  };

  const notesList = ["Nota 1", "Nota 2", "Nota 3"]; // exemplo de notas

  return (
    <>
      {/* MENU LATERAL SLIDE */}
      <Menu
        left
        isOpen={menuOpen}
        onStateChange={(state) => setMenuOpen(state.isOpen)}
        burgerButtonClassName="hidden-burger"
        menuClassName="bm-menu"
        overlayClassName="bm-overlay"
        customCrossIcon={false}
      >
        <Form.Field>
          <Form.Label>Search</Form.Label>
          <Form.Control>
            <Form.Input
              type="text"
              placeholder="Buscar notas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Control>
        </Form.Field>

        {notesList
          .filter((note) =>
            note.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((note, index) => (
            <Button
              key={index}
              fullwidth
              color="black"
              outlined
              className="mt-2"
              onClick={() => {
                onSelectNote(note);
                setMenuOpen(false);
              }}
            >
              {note}
            </Button>
          ))}

        <Button
          fullwidth
          color="primary"
          className="mt-3"
          onClick={() => alert("Nova nota")}
        >
          Novo
        </Button>
      </Menu>

      <Navbar color="custom-purple" className="navbar-logged" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="/notes" className="navbar-item">
              <img src={LogoImage} alt="Logo" style={{ maxHeight: "3rem" }} />
            </Link>

            <Navbar.Item>
              <Button color="white" outlined onClick={() => setMenuOpen(true)}>
                Abrir Menu
              </Button>
            </Navbar.Item>
          </Navbar.Brand>

          <Navbar.Container align="start" className="is-flex is-align-items-center mr-3">
            <Navbar.Item>
              <Button
                renderAs={Link}
                to="/users/edit"
                color="white"
                outlined
                className="mr-2"
              >
                User Edit
              </Button>
            </Navbar.Item>

            <Navbar.Item>
              <Button color="white" outlined onClick={logOut}>
                Logout
              </Button>
            </Navbar.Item>
          </Navbar.Container>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderLogged;
