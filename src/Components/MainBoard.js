import styled from "styled-components"


export default function MainBoard({registers}){
    
    let sum = 0; 

    registers.forEach((transaction) => {
        
            let transactionValue = parseFloat(transaction.value)
            if(transaction.type === "Entrada"){
                sum+=transactionValue
            } else{
                sum -= transactionValue
            } 
          
        })


return<>
<Board>
    <Transactions>
    {(registers.length !== 0) ? registers.map((register) =>
            <Transaction>
        <DivDay>{register.date}</DivDay>
        <DivDescription>{register.description}</DivDescription>
        <DivDate color={(register.type === "Entrada")?"#008000":"red"}>{Number(register.value).toFixed(2)}</DivDate>
        </Transaction>
    ) : <h6>Não há registros de entrada ou saída</h6> }
    </Transactions>
            <DivSald><h3>Saldo</h3> <h4>R$ {sum.toFixed(2).toLocaleString()}</h4></DivSald> 
    </Board>
</>

}


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
