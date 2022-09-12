import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postSign } from "../Services/Services";


export default function Sign(){
    const [FormSig, setFormSig] = useState({});
    const navigate = useNavigate();

    function handleForm({name, value}){
        setFormSig({
            ...FormSig,[name]:value,
        })
    }

    function sendForm(e){
        e.preventDefault()
        postSign(FormSig).then((res) =>{
            navigate('/');
        })
        .catch((res) =>{
            alert(res.response.data)
        })
    }

    return <Content>
        <MainContent>
        <h1>MyWallet</h1>
        <FormSign>
            <input type="text" placeholder="Nome" name="name" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value,
            })}/>
            <input type="email" placeholder="E-mail" name="email" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value,
            })}/>
            <input type="password" placeholder="Senha" name="password" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value,
            })}/>
            <input type="password" placeholder="Confirme a senha" name="repeat_password" onChange={(e) => handleForm({
                name:e.target.name,
                value:e.target.value,
            })}/>
            <Button onClick={sendForm} >Cadastrar</Button>
        </FormSign>
        <Link to={"/"}><h4>Já tem uma conta? Entre agora!</h4></Link> 
        </MainContent>

        
        </Content>
}

const Content = styled.div`
    height: 667px;
    width: 330px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin:0 auto;
    
    a{
        text-decoration:none;
    }
`
const MainContent = styled.div`
    width: 90%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    h1{
        color:white;
    }
    h4{
        color:white;
        font-family:Raleway;
    }
`
const FormSign = styled.form`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    input{
        width:90%;
        height:40px;
        border-radius:3px;
        border:none;
        margin: 3px auto;
    }

    input::placeholder {
        color: black;
      }
`

const Button = styled.button`
    color: white;
    background:#A328D6;
    border-radius: 5px;
    border:none;
    width:90%;
    height:40px;
`