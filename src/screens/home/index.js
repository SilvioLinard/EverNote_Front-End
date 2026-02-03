import React, { Fragment } from 'react';
import PresentationImage from '../../assets/images/presentation.png';
import Header from "../../components/header";
import { Section, Container, Columns, Heading } from 'react-bulma-components';
import "../../styles/home.scss";
import { Link } from 'react-router-dom';

const Home = () => (
  <Fragment>
    <Header />

    <Section size="medium" className="home">
      <Container>
        <Columns>
          <Columns.Column size={5}>
            <Heading size={2} className="has-text-white">
              EverNote, your favorite note-taking app.

            </Heading>
            <br />
            <Heading subtitle size={5} className="has-text-light">
              Welcome to Evernote, create, edit and customize your notes, an app designed for you.
              <br /><br />
              Download the app or visit our website, register, and enjoy!
            </Heading>

            <Link to="/register" className="button is-outlined is-white is-large">
              <strong>Register for free Now</strong>
            </Link>
          </Columns.Column>

          <Columns.Column size={6} offset={1}>
            <img src={PresentationImage} alt="Presentation" />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  </Fragment>
);

export default Home;
