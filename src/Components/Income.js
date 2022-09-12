import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import outdoor from "../Vetores/outdoor.png";
import { postTransaction } from "../Services/Services";


export default function Income(){

    const [formIncome, setFormIncome] = useState({type:"Entrada"});
    const navigate = useNavigate();

    function handleForm({name, value}){
        setFormIncome({
            ...formIncome,[name]:value,
        })
    }

    function sendForm(e){
        e.preventDefault()
        postTransaction(formIncome).then((res) => {
            navigate('/main', {state:res.data})
        })
       .catch((res) => {
        alert(res.response.data)
       })
    }

    return<>
    <Content>
    <Header>
        <div>Nova entrada</div>
        <Link to={'/main'}><img src={outdoor} alt="porta de saída"/></Link>
    </Header>
    <FormIncome>
            <input type="number" placeholder="Valor" name="value" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value,
            })}/>
            <input type="text" placeholder="Descrição" name="description" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value,
            })} />
            <Button onClick={sendForm}>Salvar entrada</Button>
    </FormIncome>
    </Content>
    </>
}

const Content = styled.div`
    height: 667px;
    width: 330px;
    display:flex;
    justify-content: flex-start;
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
    margin: 10px 0;
`

const FormIncome = styled.form`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top: 5px;

    input{
        width:100%;
        height:40px;
        border-radius:3px;
        border:none;
        margin: 5px auto;
    }

    input::placeholder {
        color: black;
      }
`

const Button = styled.button`
    color: white;
    font-weight:700;
    font-size:15px;
    background:#A328D6;
    border-radius: 5px;
    border:none;
    width:100%;
    height:40px;
    margin-top: 5px;
`