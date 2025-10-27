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
              Create notes easily and access them anytime on the cloud
            </Heading>

            <Heading subtitle size={5} className="has-text-light">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
              <br /><br />
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
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
