import React, { useState } from "react";
import { Button, Form, Columns, Section } from "react-bulma-components";
import { useNavigate } from "react-router-dom";
import "../../../styles/registerform.scss";

const { Field, Control, Help } = Form;
const Input = Form.Input; // ✅ IMPORT CORRETO DO INPUT

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <Section>
      <Columns centered>
        <Columns.Column size={10}>
          <form onSubmit={handleRegister}>

            <Field>
              <label className="label">Name</label>
              <Control>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Control>
            </Field>

            <Field>
              <label className="label">Email</label>
              <Control>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Control>
            </Field>

            <Field>
              <label className="label">Password</label>
              <Control>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Control>
            </Field>

            <Field kind="group">
              <Control>
                <Button
                  type="button"
                  color="light"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </Control>

              <Control>
                <Button type="submit" color="primary">
                  Register
                </Button>
              </Control>
            </Field>

            {error && <Help color="danger">Email or Password invalid</Help>}
          </form>
        </Columns.Column>
      </Columns>
    </Section>
  );
}

export default RegisterForm;
