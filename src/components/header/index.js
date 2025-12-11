import React, { useState } from 'react';
import { Navbar, Container } from 'react-bulma-components';
import LogoImage from '../../assets/images/logo.png';
import '../../styles/header.scss';
import { Link } from 'react-router-dom';

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Navbar active={isActive} className='backgroundColor' >
      <Container >
        <Navbar.Brand >
          <Link to="/">
            <img src={LogoImage} alt="Logo" />
          </Link>

          <Navbar.Burger 
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={isActive ? 'true' : 'false'}
            data-target="navbar-menu"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Navbar.Burger>
        </Navbar.Brand>

        <Navbar.Menu id="navbar-menu" className={isActive ? 'is-active' : ''}>
          <Navbar.Container align="right">

            <Navbar.Item>
              <Link to="/register" className="button is-outlined has-text-custom-purple">Register</Link>
            </Navbar.Item>

            <Navbar.Item  >
              <Link to="/Login" className="button is-outlined has-text-custom-purple">Login</Link>
            </Navbar.Item>


          </Navbar.Container>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}

export default Header;
