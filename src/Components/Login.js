import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginWithGoogle, postLogin } from "../Services/Services";
import { firebase, auth } from "../Services/Firebase.js";

export default function Login() {
  const [FormLog, setFormLog] = useState({});
  const navigate = useNavigate();

  function handleForm({ name, value }) {
    setFormLog({
      ...FormLog,
      [name]: value,
    });
  }

  function sendForm(e) {
    e.preventDefault();
    postLogin(FormLog)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data));
        navigate("/main");
      })
      .catch((res) => {
        alert(res.response.data);
      });
  }

  async function handleClickButton(e) {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    loginWithGoogle(result.user)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data));
        navigate("/main");
      })
      .catch((res) => {
        alert(res.response.data);
      });
  }

  return (
    <Content>
      <MainContent>
        <h1>MyWallet</h1>
        <FormLogin>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <Button onClick={sendForm}>Entrar</Button>
          <GoogleButton onClick={handleClickButton}>
            Login com o Google
          </GoogleButton>
        </FormLogin>
        <Link to={"/sign"}>
          <h4>Primeira vez? Cadastre-se!</h4>
        </Link>
      </MainContent>
    </Content>
  );
}

const Content = styled.div`
  height: 667px;
  width: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  a {
    text-decoration: none;
  }
`;
const MainContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: white;
  }
  h4 {
    color: white;
    font-family: Raleway;
  }
`;
const FormLogin = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    width: 90%;
    height: 40px;
    border-radius: 3px;
    border: none;
    margin: 3px auto;
  }

  input::placeholder {
    color: black;
  }
`;

const Button = styled.button`
  color: white;
  background: #a328d6;
  border-radius: 5px;
  border: none;
  width: 90%;
  height: 40px;
  margin-top: 7px;
  cursor: pointer;
`;

const GoogleButton = styled.button`
  color: white;
  background: #a328d6;
  border-radius: 5px;
  border: none;
  width: 90%;
  height: 40px;
  margin-top: 7px;
  cursor: pointer;
`;
