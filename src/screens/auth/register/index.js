import React from "react";
import { Container, Section, Columns, Card, Image, Heading } from "react-bulma-components";
import Header from "../../../components/header";
import LogoImage from "../../../assets/images/logo.png";
import "../../../styles/auth.scss";
import RegisterForm from "../../../components/auth/register_form";


const RegisterScreen = () => {
  return (
    <>
      <Header />
      <Section size="medium" className="auth">
        <Container>
          <Columns centered>
            <Columns.Column size={4}>
              <Card>
                <Card.Content>
                  <Section>
                    <Columns centered>
                      <Columns.Column size={8} className="has-text-centered">
                        <Image src={LogoImage} size={50} alt="Logo" />
                      </Columns.Column>
                    </Columns>

                    <Columns centered>
                      <Columns.Column size={10} className="has-text-centered">
                        <Heading
                          size={4}
                          className="has-text-grey"
                        >
                          Your notes on the cloud
                        </Heading>
                      </Columns.Column>
                    </Columns>


                  </Section>
                  <RegisterForm />
                </Card.Content>

              </Card>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </>
  );
};

export default RegisterScreen;
