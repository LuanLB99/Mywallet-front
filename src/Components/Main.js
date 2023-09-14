import styled from "styled-components";
import plus from "../Vetores/plus.png";
import minus from "../Vetores/minus.png";
import outdoor from "../Vetores/outdoor.png";
import MainBoard from "./MainBoard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTransactions } from "../Services/Services.js";

export default function Main() {
  const [registers, setRegisters] = useState([]);
  const [userName, setUserName] = useState("Fulano");

  useEffect(() => {
    getTransactions().then((res) => {
      setUserName(res.data.name);
      setRegisters(res.data.transactions);
    });
  }, []);

  return (
    <>
      <Content>
        <Header>
          <div>Olá, {userName}!</div>
          <Link to={"/"}>
            {" "}
            <img
              src={outdoor}
              alt="porta de saída"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            />
          </Link>
        </Header>
        <MainBoard registers={registers} />
        <Footer>
          <Link to={"/income"}>
            <AddRegister>
              <img src={plus} alt="setinha de soma" />
              <div>Nova entrada</div>
            </AddRegister>
          </Link>
          <Link to={"/expense"}>
            <AddRegister>
              <img src={minus} alt="setinha de subtração" />
              <div>Nova saída</div>
            </AddRegister>
          </Link>
        </Footer>
      </Content>
    </>
  );
}

const Content = styled.div`
  height: 667px;
  width: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  a {
    text-decoration: none;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 26px;
  font-weight: 700;
`;
const AddRegister = styled.div`
  background: #a328d6;
  color: white;
  width: 150px;
  height: 100px;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    height: 20px;
    width: 20px;
  }

  div {
    width: 10px;
    font-weight: 700;
    font-size: 17px;
  }
`;
const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
