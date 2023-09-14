import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postSign, signWithGoogle } from "../Services/Services";
import { firebase, auth } from "../Services/Firebase.js";

export default function Sign() {
  const [FormSig, setFormSig] = useState({});
  const navigate = useNavigate();

  function handleForm({ name, value }) {
    setFormSig({
      ...FormSig,
      [name]: value,
    });
  }

  function sendForm(e) {
    e.preventDefault();
    postSign(FormSig)
      .then((res) => {
        navigate("/");
      })
      .catch((res) => {
        alert(res.response.data);
      });
  }

  async function handleClickButton(e) {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    signWithGoogle(result.user)
      .then((res) => {
        navigate("/");
      })
      .catch((res) => {
        alert(res.response.data);
      });
  }

  return (
    <Content>
      <MainContent>
        <HeaderContent>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/wired/64/wallet.png"
            alt="wallet"
          />
          <h1>MyWallet</h1>
        </HeaderContent>
        <FormSign>
          <input
            type="text"
            placeholder="Nome"
            name="name"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
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
          <input
            type="password"
            placeholder="Confirme a senha"
            name="repeat_password"
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
          <Button onClick={sendForm}>Cadastrar</Button>
          <GoogleButton onClick={handleClickButton}>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/3d-fluency/94/google-logo.png"
              alt="google-logo"
              target="_blank"
              href="https://icons8.com/icon/pkTALNj7jXmp/carteira"
            />
            <div>Cadastrar via Google</div>
          </GoogleButton>
        </FormSign>
        <Link to={"/"}>
          <h4>Já tem uma conta? Entre agora!</h4>
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
const FormSign = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    width: 80%;
    height: 40px;
    border-radius: 5px;
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
  width: 80%;
  height: 40px;
  margin-top: 7px;
  cursor: pointer;
`;
const GoogleButton = styled.button`
  color: white;
  background: #a328d6;
  border-radius: 5px;
  border: none;
  width: 80%;
  height: 40px;
  margin-top: 7px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin-left: 5px;
  }
`;

const HeaderContent = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
