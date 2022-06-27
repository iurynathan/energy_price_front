import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Container, ContainerSignIn, Content, Input } from "./style";

function SignInComponent() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (user.password !== user.confirmPassword) {
      toast("Senhas não conferem");
      return;
    }
    if (
      !user.username ||
      !user.password ||
      !user.email ||
      !user.firstName ||
      !user.lastName
    ) {
      toast("Preencha todos os campos");
      return;
    }
    if (!user.email.includes("@")) {
      toast("Email inválido");
      return;
    }
    const options = {
      method: "POST",
      url: "https://spring-boot-coleta-precos.herokuapp.com/register",
      headers: { "Content-Type": "application/json" },
      data: {
        username: user.username,
        password: user.password,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };

    const response = await axios.request(options);
    if (response.status === 201) {
      toast("Usuário criado com sucesso");
    }
    navigate("/", { replace: true });
  };

  return (
    <Container>
      <Content>
        Email:
        <Input
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
        />
        First Name:
        <Input
          name="firstName"
          type="text"
          value={user.firstName}
          onChange={handleChange}
        />
        Last Name:
        <Input
          name="lastName"
          type="text"
          value={user.lastName}
          onChange={handleChange}
        />
        Username:
        <Input
          name="username"
          type="text"
          value={user.username}
          onChange={handleChange}
        />
        Password:
        <Input
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />
        Confirm Password:
        <Input
          name="confirmPassword"
          type="password"
          value={user.confirmPassword}
          onChange={handleChange}
        />
        <Button type="button" onClick={handleSubmit}>
          Login
        </Button>
        <ContainerSignIn>
          <a href="/login">Login</a>
        </ContainerSignIn>
      </Content>
    </Container>
  );
}

export default SignInComponent;
