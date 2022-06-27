import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  ContainerSignIn,
  Content,
  PasswordInput,
  UserNameInput,
} from "./style";

function LoginComponent() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const options = {
      method: "POST",
      url: "https://spring-boot-coleta-precos.herokuapp.com/login",
      headers: { "Content-Type": "application/json" },
      data: user,
    };

    const { data } = await axios.request(options);
    localStorage.setItem("token.coleta.precos", data);
  };

  return (
    <Container>
      <Content>
        Username:
        <UserNameInput
          name="username"
          type="text"
          value={user.username}
          onChange={handleChange}
        />
        Password:
        <PasswordInput
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />
        <Button type="button" onClick={handleSubmit}>
          Login
        </Button>
        <ContainerSignIn>
          <a href="/signin">Signin</a>
        </ContainerSignIn>
      </Content>
    </Container>
  );
}

export default LoginComponent;
