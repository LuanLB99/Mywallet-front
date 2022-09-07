import styled from "styled-components";
import plus from "./Vetores/plus.png";
import minus from "./Vetores/minus.png";
import outdoor from "./Vetores/outdoor.png";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useState } from "react";



export default function Main(){
    const [registers, setRegisters] = useState([{
        day:dayjs(Date.now()).format('DD/MM/YY'),
        descrição:"Pão com Ovo",
        value:"49,90",
        type:"saída"
    },
    {
        day:dayjs(Date.now()).format('DD/MM/YY'),
        descrição:"Pão com mortadela",
        value:"9,90",
        type:"entrada"
    }
]);



    return<>
    <Content>
    <Header>
        <div>Olá, Fulano</div>
        <img src={outdoor} alt="porta de saída"/>
    </Header>
    <Board>
    <Transactions>
        {(registers.length !== 0) ? registers.map((register) =>
             <Transaction>
            <DivDay>{register.day}</DivDay>
            <DivDescription>{register.descrição}</DivDescription>
            <DivDate color={(register.type === "entrada")?"#008000":"red"}>{register.value}</DivDate>
            </Transaction>
        ) : <h6>Não há registros de entrada ou saída</h6> }
    </Transactions>
        <DivSald><h3>Saldo</h3> <h4>2870</h4></DivSald>
    </Board>
    <Footer>
    <Link to={'/income'}><AddRegister>
    <img src={plus} alt="setinha de soma"/>
    <div>Nova entrada</div>
    </AddRegister>
    </Link>
    <Link to={'/expense'}>
    <AddRegister>
    <img src={minus} alt="setinha de subtração"/>
    <div>Nova saída</div>
    </AddRegister>
    </Link>
    </Footer>
    </Content>
    </>
}

const Content = styled.div`
    height: 667px;
    width: 330px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    margin:0 auto;
    
    a{
        text-decoration:none;
    }
`

const Header = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size:26px;
    font-weight:700;

`
const Board = styled.div`
    height:400px;
    width:100%;
    background: white;
    border-radius:3px;
    margin: 10px auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    text-align:center;

    h6{
        padding: 60px;
        font-size:20px;
        color: #868686;
    }

    
`

const AddRegister = styled.div`
    background: #A328D6;
    color:white;
    width:150px;
    height:100px;
    padding:5px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;

    img{
        height:20px;
        width:20px;
    }

    div{
        width:10px;
        font-weight:700;
        font-size:17px;
    }
`
const Footer = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
`
const Transactions = styled.div`
   width:95%;
`

const Transaction = styled.div`
    width: 95%;
    display: flex;
    align-items:flex-start;
    justify-content: space-between;
    margin-top: 10px;
`
const DivDate = styled.div`
    color:${props => props.color};
`
const DivDay = styled.div`
    color:#868686;
`

const DivDescription = styled.div`
    width:100%;
    dispay:flex;
    justify-content:flex-start;
    text-align:left;
    margin-left:4px;
`

const DivSald = styled.div`
    width:95%;
    display:flex;
    justify-content: space-between;
`

