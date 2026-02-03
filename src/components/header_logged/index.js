import React from "react";
import { Navbar, Container, Button } from "react-bulma-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LogoImage from "../../assets/images/logo-white.png";
import "../../styles/notes.scss";
import UserService from "../../services/users";

function HeaderLogged({ onOpenMenu }) {
  const navigate = useNavigate();

  const logOut = async () => {
    await UserService.logOut();
    navigate("/");
  };

  return (
    <Navbar color="custom-purple" className="navbar-logged" fixed="top">
      <Container>
        <Navbar.Brand className="is-flex is-align-items-center">

          <Link to="/notes" className="navbar-item">
            <img
              src={LogoImage}
              alt="Logo"
              style={{ maxHeight: "3rem" }}
            />
          </Link>

          <Button
            color="white"
            outlined
            className="mr-2"
            aria-label="Abrir menu"
            onClick={onOpenMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>

          
        </Navbar.Brand>
<Navbar.Container align="end">
  <Navbar.Item>
    <div className="is-flex is-align-items-end">
      <Button
        renderAs={Link}
        to="/users/edit"
        color="white"
        outlined
        className="mr-2"
      >
        User Edit
      </Button>

      <Button color="white" outlined onClick={logOut}>
        Logout
      </Button>
    </div>
  </Navbar.Item>
</Navbar.Container>

      </Container>
    </Navbar>
  );
}

export default HeaderLogged;
