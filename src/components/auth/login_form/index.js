import React, { useState } from "react";
import { Button, Form, Columns } from "react-bulma-components";
import { useNavigate } from "react-router-dom";
import UserService from '../../../services/users';
import "../../../styles/registerform.scss"

const { Field, Control, Input, Label, Help } = Form;

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.login({ email, password });
      navigate("/notes"); 
    } catch (err) {
      setError(true); 
    }
  };

  const handleRegister = () => navigate("/register");

  return (
    <Columns centered>
      <Columns.Column size={10}>
        <form onSubmit={handleSubmit}>
          <Field>
            <Label>Email:</Label>
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
            <Label>Password:</Label>
            <Control>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Control>
          </Field>

          {error && <Help color="danger">Email or Password invalid</Help>}

       <Field>
  <Control className="buttons is-grouped">
    <Button color="primary" type="submit">Login</Button>
    <Button type="button" onClick={handleRegister}>Register</Button>
  </Control>
</Field>

          
        </form>
      </Columns.Column>
    </Columns>
  );
}

export default LoginForm;
