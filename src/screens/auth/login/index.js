import React, { Fragment } from "react";
import { Section, Container, Columns, Card, Image, Heading } from "react-bulma-components";
import Header from "../../../components/header";
import LogoImage from "../../../assets/images/logo.png";
import "../../../styles/auth.scss";
import LoginForm from "../../../components/auth/login_form";


const Login = () => (
  <Fragment>
    <Header />

    <Section size="medium" className="auth">
      <Container>
        <Columns centered>
          <Columns.Column size={4}>
            <Card>
              <Card.Content>
                <Section>
                  <Columns centered>
                    <Columns.Column size={12} className="has-text-centered">
                      <Image src={LogoImage} size={50} alt="Logo" />
                    </Columns.Column>
                  </Columns>

                  <Columns centered>
                    <Columns.Column size={12}>
                      <Heading
                        size={6}
                        className="has-text-grey has-text-centered mt-4"
                      >
                        Your notes on the cloud
                      </Heading>
                    </Columns.Column>
                  </Columns>
                  <LoginForm/>
                </Section>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  </Fragment>
);

export default Login;
